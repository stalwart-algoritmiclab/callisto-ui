/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

export { a11yProps } from '@/utils/a11yProps';
export { convertMsgType } from '@/utils/convert_msg_type';
export { default as dayjs } from '@/utils/dayjs';
export {
  formatNumber,
  formatToken,
  formatTokenByExponent,
  removeEndingZeros,
} from '@/utils/format_token';
export { getDenom } from '@/utils/get_denom';
export { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
export { getValidatorCondition, getValidatorConditionClass } from '@/utils/get_validator_condition';
export { getValidatorStatus } from '@/utils/get_validator_status';
export {
  ACCOUNT_DETAILS,
  ADDRESS_DETAILS,
  BLOCKS,
  BLOCK_DETAILS,
  HOME,
  PARAMS,
  PROFILE_DETAILS,
  PROPOSALS,
  PROPOSAL_DETAILS,
  TRANSACTIONS,
  TRANSACTION_DETAILS,
  VALIDATORS,
  VALIDATOR_DETAILS,
} from '@/utils/go_to_page';
export { hexToBech32 } from '@/utils/hex_to_bech32';
export { DATE_KEY, getItem, setItem, THEME_KEY, TX_KEY } from '@/utils/localstorage';
export { mergeRefs } from '@/utils/merge_refs';
export { mergeStateChange } from '@/utils/merge_state_change';
export { isValidAddress, toValidatorAddress } from '@/utils/prefix_convert';
export { replaceNaN } from '@/utils/replace_nan';
export { nanoToSeconds, secondsToDays } from '@/utils/time';
export {
  useBalance,
  useRatesAll,
  useCapitalisationTokens,
  useGetModulesAddress,
} from '@/utils/market_cap';

export {
  convertCoinFromSatoshi,
  convertCoinFromCustomDecimal,
  convertCoinToSatoshi,
  convertCoinToCustomDecimal,
  roundToFixed,
} from '@/utils/formatting';
