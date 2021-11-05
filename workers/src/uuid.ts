export const generateUUIDs = (n: number) => {
  let uuids = [];
  for (let i = 0; i < n; i++) {
    uuids.push(crypto.randomUUID());
  }
  return uuids;
};
