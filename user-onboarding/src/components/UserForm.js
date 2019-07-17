import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

import "../styles.css";

const UserForm = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form className="login-form">
      <h2>Create An Account</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <Field
          autoComplete="off"
          type="text"
          id="name"
          name="name"
          className={errors.name ? "invalid" : ""}
        />
        <p className="error-text">{touched.name && errors.name}</p>
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
        <p className="error-text">{touched.email && errors.email}</p>
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
        <p className="error-text">{touched.password && errors.password}</p>
      </div>

      <div className="form-group-tos">
        <label htmlFor="tos">Terms of Service</label>
        <Field
          type="checkbox"
          id="tos"
          name="tos"
          checked={values.tos}
          className={errors.tos ? "invalid" : ""}
        />
        <p className="error-text">{touched.tos && errors.tos}</p>
      </div>
      {isSubmitting && <p>Loading...</p>}
      <button type="submit" className="submit-button">
        Submit &rarr;
      </button>
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
  handleSubmit(values, formikBag) {
    console.log("FORM SUBMITTED SUCCESSFULLY!");
    console.log(values);
    const url = "https://reqres.in/api/users";
    formikBag.setSubmitting(true);
    axios.post(url, values).then(res => {
      console.log(res.data);
      window.alert(
        `Thanks ${
          res.data.name
        }, your form has been submitted. You'll recieve an email at ${
          res.data.email
        } confirming your new account. Happy Hacking!`
      );
      formikBag.resetForm();
      formikBag.setSubmitting(false);
    });
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters long")
      .max(10, "Name must be less than 10 characters")
      .required("Yo, you left out your name!"),
    email: Yup.string()
      .min(3, "Name must be at least 3 characters long")
      .email("Email must be formatted like name@company.com")
      .required("Come on bro, no email!? Pshh, try again!"),
    password: Yup.string()
      .min(8, "Name must be at least 8 characters long")
      .required("WTF you know you need a password, right?!"),
    tos: Yup.boolean().oneOf([true], "Must Accept Terms of Service")
  })
})(UserForm);
