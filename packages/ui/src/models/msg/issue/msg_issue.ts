import * as R from 'ramda';
import type { Categories, Log } from '@/models/msg/types';
import chainConfig from '@/chainConfig';
import { formatToken } from '@/utils/format_token';

const { primaryTokenUnit } = chainConfig();
class MsgIssue {
  public category: Categories;
  public type: string;
  public sender: string;
  public receiver: string;
  public token: MsgCoin;
  public sourceChannel: string;
  public json: object;

  constructor(payload: object) {
    this.category = 'issue';
    this.type = R.pathOr('', ['type'], payload);
    this.sender = R.pathOr('', ['sender'], payload);
    this.receiver = R.pathOr('', ['receiver'], payload);
    this.token = R.pathOr({ denom: '', amount: '0' }, ['token'], payload);
    this.sourceChannel = R.pathOr('', ['sourceChannel'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object, log?: Log): MsgIssue {
    const instance = {
      category: 'issue',
      json,
      type: R.pathOr('', ['@type'], json),
      sender: R.pathOr('', ['creator'], json),
      receiver: R.pathOr('', ['address'], json),
      denom: R.pathOr('', ['denom'], json),
      tariffs: R.pathOr('', ['tariffs'], json),

      sourceChannel: R.pathOr('', ['source_channel'], json),
    };
    return instance;
  }
}

export default MsgIssue;
