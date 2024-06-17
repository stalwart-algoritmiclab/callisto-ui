/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import { FC, ReactNode } from 'react';

type TabPanelProps = {
  children?: ReactNode;
  index: number;
  value: number;
  className?: string;
};

const TabPanel: FC<TabPanelProps> = (props) => {
  const { children, value, index, className } = props;
  return (
    <div className={className} role="tabpanel" hidden={value !== index}>
      {value === index && children}
    </div>
  );
};

export default TabPanel;
