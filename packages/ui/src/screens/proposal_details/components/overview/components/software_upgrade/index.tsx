/*
 * SPDX-License-Identifier: BUSL-1.1
 * Contributed by Algoritmic Lab Ltd. Copyright (C) 2024.
 * Full license is available at https://github.com/stalwart-algoritmiclab/callisto-ui/tree/dev/LICENSES
 */

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import useAppTranslation from '@/hooks/useAppTranslation';
import numeral from 'numeral';
import { FC } from 'react';

type SoftwareUpgradeProps = {
  height: string;
  info: string;
  name: string;
};

const SoftwareUpgrade: FC<SoftwareUpgradeProps> = ({ height, info, name }) => {
  const { t } = useAppTranslation('proposals');
  return (
    <div
      style={{
        overflow: 'auto',
        whiteSpace: 'nowrap',
      }}
    >
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>{t('name')}</TableCell>
            <TableCell>{name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t('height')}</TableCell>
            <TableCell>{numeral(height).format('0,0')}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t('info')}</TableCell>
            <TableCell>{info}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default SoftwareUpgrade;
