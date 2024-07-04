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
  static getTransferAmount(log?: Log) {
    const allEvents = log?.events ?? [];
    const transferEvents = allEvents.filter((x: { type: string }) => x?.type === 'transfer');

    const transferAmounts =
      transferEvents?.[transferEvents.length - 1]?.attributes?.filter(
        (x: { key?: string }) => x.key === 'amount'
      ) ?? [];

    const amounts = (transferAmounts?.[transferAmounts.length - 1]?.value ?? '0')
      .split(',')
      .map((x) => {
        const [amount, denom = primaryTokenUnit] = x.match(/[a-z]+|[^a-z]+/gi) ?? [];

        return formatToken(amount, denom);
      });
    return amounts;
  }

  static fromJson(json: object, log?: Log): MsgExchange {
    const amounts = this.getTransferAmount(log);
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
