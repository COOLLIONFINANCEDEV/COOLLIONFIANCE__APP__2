function UpdateDate(update, Bythat) {
  let updateDay = new Date(Bythat);
  for (const key in update) {
    if (Object.hasOwnProperty.call(update, key)) {
      if (key === "day") {
        const clientYear = new Date(Bythat).getDate();
        const AddYear = update[key];
        const changeyears = new Date(Bythat).setDate(clientYear + AddYear);
        updateDay = new Date(changeyears);
      } else if (key === "month") {
        const clientYear = new Date(Bythat).getMonth();
        const AddYear = update[key];
        const changeyears = new Date(Bythat).setMonth(clientYear + AddYear);
        updateDay = new Date(changeyears);
      } else if (key === "year") {
        const clientYear = new Date(Bythat).getFullYear();
        const AddYear = update[key];
        const changeyears = new Date(Bythat).setFullYear(clientYear + AddYear);
        updateDay = new Date(changeyears);
      }
    }
  }

  return updateDay;
}

export default UpdateDate;
