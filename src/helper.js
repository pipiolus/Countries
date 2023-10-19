const digitFormatter = (num) => {
  const INTEGER_FORMATTER = new Intl.NumberFormat("en-us");
  return INTEGER_FORMATTER.format(num);
};
export default { digitFormatter };
