import React from 'react';
import { Formik, FormikProps, withFormik, Field, Form } from 'formik';
import * as Yup from "yup";
function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}


class UserDetails extends React.Component {
    handleChange=(e)=>{
        console.log('handleChange', e)
    }
    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        mobileNumber: ''
                    }}
                    onSubmit={(values) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values));
                        }, 2000);
                    }}
                    render={({ values, errors,
                        setFieldValue, setFieldError,
                        handleChange, handleBlur }) => (
                            <Form className="ui form">
                                <div className="field">
                                    <label>First Name</label>
                                    <Field
                                        className="ui input error"
                                        id="firstName"
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={values.firstName}
                                        //validate={validateEmail}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div className="field">
                                    <label>Last Name</label>
                                    <Field
                                        className="ui input error"
                                        id="lastName"
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div className="field">
                                    <label>E-mail</label>
                                    <Field
                                        className="ui input error"
                                        id="emailId"
                                        type="email"
                                        name="email"
                                        placeholder="Email Id"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div className="field">
                                    <label>Password</label>
                                    <Field
                                        className="ui input error"
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div>
                                    <label>Contact Number</label>
                                    <Field
                                        id="mobileNumber"
                                        type="text"
                                        name="mobileNumber"
                                        placeholder="Mobile Number"
                                        value={values.phoneNumber}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div>
                                    <button type="submit" className="ui button">Submit</button>
                                </div>
                            </Form>
                        )}
                >
                </Formik>
            </div>
        )
    }
}

export default UserDetails;