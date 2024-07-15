import { makeStyles } from 'tss-react/mui';
export const useStyles = makeStyles()((theme) => ({
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0',
    fontSize: '16px',
    textAlign: 'center',
    borderRadius: '15px',
    color: '#C4C4C4',
  },
  th: {
    backgroundColor: 'transparent',
    padding: '10px',
    borderBottom: '1px solid #282828',
  },
  td: {
    padding: '12px',
    borderBottom: '1px solid #282828',
  },
  tr: {
    '&:nth-child(even)': {
      backgroundColor: 'transparent',
    },
  },
}));
