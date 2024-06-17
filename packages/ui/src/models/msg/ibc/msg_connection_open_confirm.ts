/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgConnectionOpenConfirm {
  public category: Categories;

  public type: string;

  public signer: string;

  public connectionId: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'ibc';
    this.type = R.pathOr('', ['type'], payload);
    this.signer = R.pathOr('', ['signer'], payload);
    this.connectionId = R.pathOr('', ['connectionId'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgConnectionOpenConfirm {
    return {
      category: 'ibc',
      json,
      type: R.pathOr('', ['@type'], json),
      signer: R.pathOr('', ['signer'], json),
      connectionId: R.pathOr('', ['connection_id'], json),
    };
  }
}

export default MsgConnectionOpenConfirm;
