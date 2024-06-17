/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

export { atomState } from '@/recoil/user/atom';
export { useUserRecoil } from '@/recoil/user/hooks';
export {
  readUserAddress,
  writeUserAddress,
  readIsUserLoggedIn,
  writeIsUserLoggedIn,
  readUserPubKey,
  writeUserPubKey,
  readWalletName,
  writeWalletName,
} from '@/recoil/user/selectors';
export type { AtomState } from '@/recoil/user/types';
