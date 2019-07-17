import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

import "../styles.css";

const UserForm = ({ errors, touched, isSubmitting }) => {
  return (
    <Form className="login-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <Field
          autoComplete="off"
          type="text"
          id="name"
          name="name"
          className={errors.name ? "invalid" : ""}
        />
        <p>{touched.name && errors.name}</p>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Field
          autoComplete="off"
          type="text"
          id="email"
          name="email"
          className={errors.email ? "invalid" : ""}
        />
        <p>{touched.email && errors.email}</p>
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Field
          autoComplete="off"
          type="password"
          id="password"
          name="password"
          className={errors.password ? "invalid" : ""}
        />
        <p>{touched.password && errors.password}</p>
      </div>

      <div>
        <label htmlFor="tos">Terms of Service</label>
        <Field autoComplete="off" type="checkbox" id="tos" name="tos" />
        <p>{touched.tos && errors.tos}</p>
      </div>

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
