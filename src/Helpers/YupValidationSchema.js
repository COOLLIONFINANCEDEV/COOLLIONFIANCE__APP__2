import * as yup from "yup";
const re = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
  comment: yup
    .string()
    .max("100")
    .required(),
  contact: yup
    .string()
    .min("12")
    .max("15")
    .required(),
  country: yup.string("Please select your country").required(),
  link: yup.string().matches(re, "URL is not valid"),
  payment: yup
    .string()
    .label("Card number")
    .max(16)
    .required(),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
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
