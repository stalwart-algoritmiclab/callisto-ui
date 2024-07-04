import * as R from 'ramda';
import type { Categories, Log } from '@/models/msg/types';
import chainConfig from '@/chainConfig';
import { formatToken } from '@/utils/format_token';

const { primaryTokenUnit } = chainConfig();
class MsgFaucet {
  public category: Categories;
  public type: string;
  public sender: string;
  public receiver: string;
  public token: MsgCoin;
  public sourceChannel: string;
  public json: object;

  constructor(payload: object) {
    this.category = 'faucet';
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
    const transferAmounts = transferEvents
      .flatMap(
        (event) => event.attributes?.filter((x: { key?: string }) => x.key === 'amount') ?? []
      )
      .slice(1);

    const amounts = transferAmounts.flatMap((attribute) =>
      attribute?.value.split(',').map((x) => {
        const [amount, denom] = x.match(/[a-z]+|[^a-z]+/gi) ?? [];
        return { amount, denom };
      })
    );

    return amounts;
  }
  static fromJson(json: object, log?: Log): MsgFaucet {
    const amounts = this.getTransferAmount(log);
    const instance = {
      category: 'faucet',
      json,
      amounts,
      type: R.pathOr('', ['@type'], json),
      sender: R.pathOr('', ['creator'], json),
      receiver: R.pathOr('', ['address'], json),

      sourceChannel: R.pathOr('', ['source_channel'], json),
    };

    return instance;
  }
}

export default MsgFaucet;
