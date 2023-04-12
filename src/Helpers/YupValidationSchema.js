import * as yup from "yup";
const re =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const YupRule = {
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
    )
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),

  twoFactor: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(7, "Must be exactly 5 digits")
    .max(7, "Must be exactly 5 digits"),

  name: yup.string().max("20").required(),
  comment: yup.string().max("2000").min("200").required(),
  subTitle: yup.string().max(100).required(),
  text: yup.string().required(),
  contact: yup.string().min("12").max("15").required(),
  country: yup.string("Please select your country").required(),
  link: yup.string().matches(re, "URL is not valid"),
  payment: yup.string().label("Card number").max(16).required(),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  startDate: yup.date().default(() => new Date()),
  endDate: yup
    .date()
    .when(
      "startDate",
      (startDate, schema) => startDate && schema.min(startDate)
    ),
  number: (min) =>
    yup
      .number()
      .positive("Must be more than 0")
      .integer("Must be more than 0")
      .min(min)
      .required("This field is required"),
  amount: (min, max = 10000000000000) =>
    yup
      .number()
      .positive("Must be more than 0")
      .integer("Must be more than 0")
      .max(max)
      .min(min)
      .test(
        "amount test",
        "money must be a multiple of five",
        (item) => item % 5 === 0
      )
      .required("This field is required"),
  boolean: yup.boolean().required(),
};

const YupValidationSchema = (TypeStatus) => {
  return yup.object(confirmTypeStatus(TypeStatus));
};

function confirmTypeStatus(TypeStatus) {
  const AllRule = {};
  TypeStatus.forEach((item) => {
    if (typeof YupRule[item.type] === "function") {
      if (typeof item.props === "object") {
        AllRule[item.key] = YupRule[item.type](...item.props);
      } else {
        AllRule[item.key] = YupRule[item.type](item.props);
      }
    } else {
      AllRule[item.key] = YupRule[item.type];
    }
  });
  return AllRule;
}

export default YupValidationSchema;
