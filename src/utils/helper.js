const flattenObject = (obj, delimiter = ".", prefix = "") => {
  const flattObject = Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}${delimiter}` : "";
    if (
      typeof obj[k] === "object" &&
      obj[k] !== null &&
      Object.keys(obj[k]).length > 0
    )
      Object.assign(acc, flattenObject(obj[k], delimiter, k));
    else acc[k] = obj[k];
    return acc;
  }, {});

  return flattObject;
};
export const DateToIso = (date) => {
  if (!date) return null;
  const gregorianDate = date.toDate(); 
  return gregorianDate.toISOString(); 
};

export { flattenObject, DateToIso };