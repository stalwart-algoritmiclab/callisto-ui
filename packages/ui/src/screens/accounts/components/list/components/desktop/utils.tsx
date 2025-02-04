import useGrid from '@/hooks/useGrid';

const columns: Parameters<typeof useGrid>[0] = [
  {
    key: 'top_rank',
    width: 5,
  },
  {
    key: 'top_address',
    width: 50,
  },
  // {
  //   key: 'top_dtag',
  //   width: 10,
  // },
  {
    key: 'top_balance',
    align: 'right',
    width: 15,
  },
  {
    key: 'top_percentage',
    align: 'right',
    width: 20,
  },
];

export const useColumns = () => columns;
