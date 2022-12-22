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

  twoFactor: yup
    .number()
    .test("len", "Must be exactly 7 characters", (val) => {
      if (val) return val.toString().length === 7;
    })
    .required(),

  name: yup
    .string()
    .max("20")
    .required(),
  comment: yup.string().max("100"),
  contact: yup
    .string()
    .min("12")
    .max("15"),
  country: yup.object("Please select your country"),
};

const YupValidationSchema = (TypeStatus) => {
  return yup.object(confirmTypeStatus(TypeStatus));
};

function confirmTypeStatus(TypeStatus) {
  const AllRule = {};
  TypeStatus.forEach((item) => {
    AllRule[item.key] = YupRule[item.type];
  });
  return AllRule;
}

export default YupValidationSchema;
