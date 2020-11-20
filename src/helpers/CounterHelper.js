export const countTimes = (counters) => {
  let times = 0;
  counters.forEach((counter) => {
    times += counter.count;
  });
  if (times === 1) return `${times} time`;
  return `${times} times`;
};
