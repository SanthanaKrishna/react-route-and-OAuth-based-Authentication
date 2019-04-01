import React from 'react';
import { Formik, FormikProps, withFormik, Field, Form } from 'formik';
import * as Yup from "yup";

const HandleForm

class StreamCreate extends React.Component {
    handleSubmit = (values, {
        props = this.props,
        setSubmitting
    }) => {
        setSubmitting(false);
        retrun;
    }
    render() {
        return (
            <Formik
                initialValues={}
                validate={}
                onSubmit={}
                render={
                    (formProps: FormikProps) => {
                        <Form>
                            <Field/>
                        </Form>
                    }

                }
            >

            </Formik>
        )

    }
};

export default StreamCreate;
