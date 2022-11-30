import * as yup from "yup";

const YupValidationSchema = yup.object({
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
  });

export default YupValidationSchema;