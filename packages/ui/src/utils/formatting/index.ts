import numeral from 'numeral';

const SATOSHI_AMOUNT = Math.pow(10, Number(process.env.NEXT_PUBLIC_DECIMAL) ?? 0);

export const convertCoinFromSatoshi = (num: string) => {
  return numeral(num).divide(SATOSHI_AMOUNT).value();
};
export const convertCoinFromCustomDecimal = (num: string, decimal: number) => {
  return numeral(num).divide(Math.pow(10, decimal)).value();
};

export const convertCoinToSatoshi = (num: string) => {
  return numeral(num).multiply(SATOSHI_AMOUNT).value();
};
export const convertCoinToCustomDecimal = (num: string, decimal: number) => {
  return numeral(num)
    .multiply(Math.pow(10, Number(decimal)))
    .value();
};

export const roundToFixed = (num: string, scale: number) => {
  return (convertCoinFromSatoshi(num) || 0).toFixed(scale);
};
