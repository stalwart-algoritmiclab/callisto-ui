/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { MouseEventHandler, useState } from 'react';

export const useInfoPopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | null>(null);

  const handlePopoverOpen: MouseEventHandler<HTMLAnchorElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = !!anchorEl;

  return {
    handlePopoverOpen,
    handlePopoverClose,
    anchorEl,
    open,
  };
};
