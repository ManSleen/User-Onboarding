import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = ({ errors, touched, isSubmitting }) => {
  return (
    <Form>
      <label htmlFor="name">Name</label>
      <Field autoComplete="off" type="text" id="name" name="name" />

      <label htmlFor="email">Email</label>
      <Field autoComplete="off" type="text" id="email" name="email" />

      <label htmlFor="password">Password</label>
      <Field autoComplete="off" type="password" id="password" name="password" />

      <label htmlFor="tos">Terms of Service</label>
      <Field autoComplete="off" type="checkbox" id="tos" name="tos" />

      <button type="submit">Submit &rarr;</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: () => {
    return {
      name: "",
      email: "",
      password: "",
      tos: false
    };
  },
  handleSubmit(values) {
    console.log("FORM SUBMITTED SUCCESSFULLY!");
    console.log(values);
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters long")
      .max(10, "Name must be less than 10 characters")
      .required("Name is required"),
    email: Yup.string()
      .min(3, "Name must be at least 3 characters long")
      .email("Email must be formatted like name@company.com")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Name must be at least 8 characters long")
      .required("Password is required")
  })
})(UserForm);
