/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import * as R from 'ramda';
import type { Categories } from '@/models/msg/types';

class MsgUnknown {
  public category: Categories;

  public type: string;

  public json: object;

  constructor(payload: object) {
    this.category = 'others';
    this.type = R.pathOr('', ['type'], payload);
    this.json = R.pathOr({}, ['json'], payload);
  }

  static fromJson(json: object): MsgUnknown {
    return {
      category: 'others',
      type: R.pathOr('', ['@type'], json),
      json,
    };
  }
}

export default MsgUnknown;
