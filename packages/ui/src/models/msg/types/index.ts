/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

export type BaseCategories =
  | 'bank'
  | 'crisis'
  | 'distribution'
  | 'governance'
  | 'slashing'
  | 'staking'
  | 'profiles'
  | 'ibc'
  | 'ibc-transfer'
  | 'authz'
  | 'feegrant'
  | 'vesting'
  | 'exchange'
  | 'faucet'
  | 'create_tariffs'
  | 'update_tariffs'
  | 'delete_tariffs'
  | 'issue'
  | 'create_rates'
  | 'update_rates'
  | 'delete_rates'
  | 'create_addresses_secured'
  | 'update_addresses_secured'
  | 'delete_addresses_secured'
  | 'create_addresses'
  | 'update_addresses'
  | 'delete_addresses'
  | 'withdraw_tariffs'
  | 'withdraw'
  | 'others';
export type CustomCategories = ''; // custom modules
export type Categories = BaseCategories | CustomCategories;
export interface Log {
  events?: Array<{
    type?: string;
    attributes?: Array<{
      key?: string;
      value?: string;
    }>;
  }>;
}
