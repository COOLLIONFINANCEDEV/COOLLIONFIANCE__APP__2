export const successContent = () =>
  "Congratulations, your account has been successfully created";
export const errorContent = () =>
  "Sorry, server problem, please try again soon";

export const connectWithSuccess = () => {
  "Successful connection";
};
export const successUpdate = (type) => {
  if (type === undefined) {
    return `your information has been successfully changed`;
  } else {
    return `your ${type} has been successfully changed`;
  }
};
export const errorUpdate = (type) => {
  if (type === "email") {
    return `this email already exists`;
  } else if (type === "password") {
    return "old password does not match";
  } else {
    return "Sorry, server problem, please try again soon";
  }
};

export const PoppuContentUpdate = () => `please fill in the edit fields`;
export const PoppuTitleUpdate = () => "change";
