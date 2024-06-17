/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

export type AtomState =
  | {
      moniker: string;
      imageUrl?: string;
    }
  | null
  | boolean;

export interface Profile {
  moniker: string;
  imageUrl?: string;
}
