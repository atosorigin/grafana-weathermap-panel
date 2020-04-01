export const isNumFloat = (value: string): number => {
  if (String(value).match(/^-{0,1}\d+$/) || String(value).match(/^\d+\.\d+$/)) {
    return 1;
  }
  return 0;
};
