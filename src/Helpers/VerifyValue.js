function VerifyValue(value) {
  if (
    value === undefined ||
    value === "Undefined" ||
    value === "undefined" ||
    value === null
  ) {
    return "";
  }
  return value;
}


export default VerifyValue;