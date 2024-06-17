/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { getValidatorStatus } from '@/utils/get_validator_status';

export const getStatusTheme = getValidatorStatus;

export const getCondition = (condition: number, status: number) => {
  let result = 'na';
  if (status === 3) {
    if (condition > 90) {
      result = 'good';
    } else if (condition > 70 && condition < 90) {
      result = 'moderate';
    } else {
      result = 'bad';
    }
  }
  return result;
};
