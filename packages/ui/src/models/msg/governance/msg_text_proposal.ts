/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import * as R from 'ramda';

class MsgTextProposal {
  public type: string;

  public title: string;

  public description: string;

  constructor(payload: object) {
    this.type = R.pathOr('', ['type'], payload);
    this.title = R.pathOr('', ['title'], payload);
    this.description = R.pathOr('', ['description'], payload);
  }

  static fromJson(json: object): MsgTextProposal {
    return {
      type: R.pathOr('', ['@type'], json),
      title: R.pathOr('', ['title'], json),
      description: R.pathOr('', ['description'], json),
    };
  }
}

export default MsgTextProposal;
