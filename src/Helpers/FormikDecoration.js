import { useFormik } from "formik";

const FormikDecoration = (initialValues, validationSchema, handleSubmit) => {
  return useFormik({initialValues, validationSchema, onSubmit: (values) => handleSubmit(values)});
};

export default FormikDecoration;