/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import copy from 'copy-to-clipboard';
import type { TFunction } from '@/hooks/useAppTranslation';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

export const useAddress = (t: TFunction) => {
  const handleCopyToClipboard = useCallback(
    (value: string) => {
      copy(value);
      toast<string>(t('common:copied'));
    },
    [t]
  );

  return {
    handleCopyToClipboard,
  };
};
