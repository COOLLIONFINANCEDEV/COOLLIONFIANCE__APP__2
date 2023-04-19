import * as yup from "yup";
const re =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const AllRule = {
  email: yup.string("Enter your email").email("Enter a valid email"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
    ),
  confirmPassword: yup
    .string()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),

  twoFactor: yup
    .string()

    .matches(/^[0-9]+$/, "Must be only digits")
    .min(7, "Must be exactly 5 digits")
    .max(7, "Must be exactly 5 digits"),

  name: yup.string().min("5").max("40"),
  comment: (min = 100, max = 1500) => yup.string().min(min).max(max),
  text: yup.string(),
  contact: yup.string().min("12").max("15"),
  country: yup.string("Please select your country"),
  link: yup.string().matches(re, "URL is not valid"),
  payment: yup.string().label("Card number").max(16),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  number: (min) =>
    yup
      .number()
      .positive("Must be more than 0")
      .integer("Must be more than 0")
      .min(min),
  boolean: yup.boolean(),
};

const YupValidationSchema = (TypeStatus) => {
  // shape in yup object
  return yup.object(confirmTypeStatus(TypeStatus));
};

function confirmTypeStatus(TypeStatus) {
  // schema final
  const schema = {};

  TypeStatus.forEach((item) => {
    const rule = AllRule[item.type];
    // add required true by default at all field
    if (!Object.keys(item).includes("required")) {
      item.required = true;
    }

    // if i add props option
    if (typeof rule === "function") {
      const props = Array.isArray(item.props) ? item.props : [item.props];
      schema[item.key] = rule(...props);
    } else {
      schema[item.key] = rule;
    }

    // add the required if is true
    if (item.required === true) {
      schema[item.key] = schema[item.key].required("This field is required");
    }
  });
  return schema;
}

export default YupValidationSchema;
