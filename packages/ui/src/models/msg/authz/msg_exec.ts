/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgExec {
  public category: Categories;

  public type: string;

  public json: object;

  public grantee: string;

  constructor(payload: object) {
    this.category = 'authz';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
    this.grantee = R.pathOr('', ['grantee'], payload);
  }

  static fromJson(json: object): MsgExec {
    return {
      category: 'authz',
      json,
      type: R.pathOr('', ['@type'], json),
      grantee: R.pathOr('', ['grantee'], json),
    };
  }
}

export default MsgExec;
