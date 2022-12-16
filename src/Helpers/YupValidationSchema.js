import * as yup from "yup";

const YupRule = {
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .test("passwords-match", "Passwords must match", function(value) {
      return this.parent.password === value;
    }),
};

const YupValidationSchema = (TypeStatus) => {
  return yup.object(confirmTypeStatus(TypeStatus));
};

function confirmTypeStatus(TypeStatus) {
  const AllRule = {};
  TypeStatus.forEach((type) => {
    AllRule[type] = YupRule[type];
  });
  return AllRule;
}

export default YupValidationSchema;
