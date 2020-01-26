// Callback, return call class
export const callClass = (classForCallback, params) => {
  return new classForCallback(params);
};
