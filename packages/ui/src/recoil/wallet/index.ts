/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

export { atomState } from '@/recoil/wallet/atom';
export { useWalletRecoil } from '@/recoil/wallet/hooks';
export {
  readOpenAuthorizeConnectionDialog,
  readOpenInstallKeplrExtensionDialog,
  readOpenLoginDialog,
  readOpenLoginSuccessDialog,
  readOpenPairConnectWalletDialog,
  readOpenPairKeplrExtensionDialog,
  readOpenSelectNetworkDialog,
  readWalletConnectURI,
  readWalletSelection,
  writeOpenAuthorizeConnectionDialog,
  writeOpenInstallKeplrExtensionDialog,
  writeOpenLoginDialog,
  writeOpenLoginSuccessDialog,
  writeOpenPairConnectWalletDialog,
  writeOpenPairKeplrExtensionDialog,
  writeOpenSelectNetworkDialog,
  writeWalletConnectURI,
  writeWalletSelection,
} from '@/recoil/wallet/selectors';
export type { AtomState } from '@/recoil/wallet/types';
