export const countTimes = (counters) => {
  let times = 0;
  counters.forEach((counter) => {
    times += counter.count;
  });
  if (times === 1) return `${times} time`;
  return `${times} times`;
};

export const confirmationTextFormatter = (selectedElements) => {
  if (!selectedElements) return '';
  if (selectedElements.length === 1)
    return `Delete the "${selectedElements[0].title}" counter?`;
  return `Delete these ${selectedElements.length} counters?`;
};

export const getArrayFiltered = ({ value, array, key }) => {
  const query = value.toLowerCase();
  const filtered = array.filter(
    (item) => item[key].toLowerCase().indexOf(query) >= 0,
  );
  return filtered;
};
