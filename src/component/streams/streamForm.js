import React from 'react';
import { Formik, FormikProps, withFormik, Field, Form, ErrorMessage } from 'formik';


class StreamForm extends React.Component {
    render() {
        console.log('StreamForm', this.props);
        const { values, setFieldValue,onFieldChange } = this.props;
        return (
            <div>
                <div className="field">
                    <lable htmlFor="title">
                        Title
                        <Field
                            type="text"
                            name="title"
                            value={values.title}
                            onChange={(ev) => onFieldChange(ev, setFieldValue)}
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
                            onChange={(ev) => onFieldChange(ev, setFieldValue)}
                        //validate={() => this.fieldValidation(values.description,errors.description)}
                        />
                        <ErrorMessage className="ui input error" name="description" />
                    </label>
                </div>
            </div>
        )

    }
};

export default StreamForm;
