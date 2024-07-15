import * as R from 'ramda';
import type { Categories, Log } from '@/models/msg/types';
import chainConfig from '@/chainConfig';
import { formatToken } from '@/utils/format_token';

const { primaryTokenUnit } = chainConfig();
class MsgExchange {
  public category: Categories;
  public type: string;
  public sender: string;
  public receiver: string;
  public token: MsgCoin;
  public sourceChannel: string;
  public json: object;

  constructor(payload: object) {
    this.category = 'exchange';
    this.type = R.pathOr('', ['type'], payload);
    this.sender = R.pathOr('', ['sender'], payload);
    this.receiver = R.pathOr('', ['receiver'], payload);
    this.token = R.pathOr({ denom: '', amount: '0' }, ['token'], payload);
    this.sourceChannel = R.pathOr('', ['sourceChannel'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }
  static getTransferAmount(log?: Log, json) {
    
    const creator = json.creator;
    const allEvents = log?.events ?? [];
    const transferEvents = allEvents.filter((x: { type: string }) => x?.type === 'transfer');

    const targetEvent = transferEvents.find((event) =>
      event.attributes.some((attr) => attr.key === 'recipient' && attr.value === creator)
    );

    if (targetEvent) {
      const transferAmounts = targetEvent.attributes.filter((attr) => attr.key === 'amount');
      const amounts = transferAmounts.map((amountAttr) => {
        const match = amountAttr.value.match(/[0-9]+|[a-zA-Z-]+/g);
        if (match && match.length >= 2) {
          const amount = match[0];
          const denom = match.slice(1).join('');

          return formatToken(amount, denom);
        }

        return formatToken('0', primaryTokenUnit);
      });
      return amounts;
    }

    return [formatToken('0', primaryTokenUnit)];
  }

  static fromJson(json: object, log?: Log): MsgExchange {
    const amounts = this.getTransferAmount(log, json);
    const instance = {
      category: 'exchange',
      json,
      type: R.pathOr('', ['@type'], json),
      sender: R.pathOr('', ['creator'], json),
      receiver: R.pathOr('', ['receiver'], json),
      tokenFrom: {
        denom: R.pathOr('', ['denom'], json),
        amount: R.pathOr('0', ['amount'], json),
      },
      tokenTo: {
        denom: R.pathOr('', ['denomTo'], json),
        amount: R.pathOr('0', [0, 'value'], amounts),
      },
      sourceChannel: R.pathOr('', ['source_channel'], json),
    };
    return instance;
  }
}

export default MsgExchange;
