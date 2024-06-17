/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { atomState } from '@/recoil/wallet/atom';

export const useWalletRecoil = () => {
  const [wallet, setWallet] = useRecoilState(atomState);

  useEffect(() => {
    // set the wallet values
  }, [
    setWallet,
    wallet.openAuthorizeConnectionDialog,
    wallet.openInstallKeplrExtensionDialog,
    wallet.openLoginDialog,
    wallet.openLoginSuccessDialog,
    wallet.openPairConnectWalletDialog,
    wallet.openPairKeplrExtensionDialog,
    wallet.openSelectNetworkDialog,
    wallet.walletConnectURI,
    wallet.walletSelection,
  ]);
};
