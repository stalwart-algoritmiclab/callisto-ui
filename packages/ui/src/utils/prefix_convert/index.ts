/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { bech32 } from 'bech32';
import chainConfig from '@/chainConfig';

const { prefix } = chainConfig();

export const toValidatorAddress = (address: string) => {
  if (!address) {
    return '';
  }
  const decode = bech32.decode(address).words;
  return bech32.encode(prefix.validator, decode);
};

export const isValidAddress = (address: string) => {
  try {
    const decoded = bech32.decode(address).words;
    return !!decoded;
  } catch {
    return false;
  }
};
