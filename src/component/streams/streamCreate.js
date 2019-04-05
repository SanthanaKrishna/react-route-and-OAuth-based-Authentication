import React from 'react';
import { Formik, FormikProps, withFormik, Field, Form, ErrorMessage } from 'formik';


export class StreamCreate extends React.Component {
    onFieldChange = (event, setFieldValue) => {
        console.log('onFieldChange', event)
        const { name, value } = event.target;
        setFieldValue(name, value);
    }
    fieldValidation = (values, event) => {
        let errors = {};
        //const text = values ? values.trim() : '';
        console.log('fieldValidation', values, event)
        if (!values.title) {
            errors.title = "Enter a title"
        }
        if (!values.description) {
            errors.description = "Enter a description"
        }
        return errors;
    }

    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        title: '',
                        description: ''
                    }}
                    onSubmit={(value) => {
                        console.log('value', value)
                        setTimeout(() => {
                            alert(JSON.stringify(value));
                        }, 2000);
                    }}
                    validate={this.fieldValidation}
                    render={({ values, handleSubmit, setFieldValue, setFieldError }) => (

                        <Form className="ui form error" onSubmit={handleSubmit}>
                            <div className="field">
                                <lable htmlFor="title">
                                    Title
                                    <Field
                                        type="text"
                                        name="title"
                                        value={values.title}
                                        onChange={(ev) => this.onFieldChange(ev, setFieldValue)}
                                    //validate={() => this.fieldValidation(values.title, errors.title)}
                                    />
                                    <ErrorMessage className="ui form error" name="title" />
                                </lable>
                            </div>
                            <div className="field">
                                <label htmlFor="description">
                                    Description

                                    <Field
                                        className="ui form"
                                        type="text"
                                        name="description"
                                        autoComplete="off"
                                        value={values.description}
                                        onChange={(ev) => this.onFieldChange(ev, setFieldValue)}
                                    //validate={() => this.fieldValidation(values.description,errors.description)}
                                    />
                                    <ErrorMessage className="ui input error" name="description" />
                                </label>
                            </div>
                            <button className="ui button secondary" type="submit">Submit</button>
                        </Form>
                    )}
                />
            </div>
        )

    }
};

// export default StreamCreate;
