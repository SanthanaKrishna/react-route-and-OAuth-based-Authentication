import React from 'react';
import { Formik, FormikProps, withFormik, Field, Form, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { createStream } from "../../actions";
import StreamFrom from './streamForm';

class StreamCreate extends React.Component {
    onFieldChange = (event, setFieldValue) => {
        const { name, value } = event.target;
        setFieldValue(name, value);
    }
    fieldValidation = (values) => {
        let errors = {};
        //const text = values ? values.trim() : '';
        if (!values.title) {
            errors.title = "Enter a title"
        }
        if (!values.description) {
            errors.description = "Enter a description"
        }
        return errors;
    }

    render() {
        console.log('StreamCreate', this.props);
        return (
            <div>
                <Formik
                    initialValues={{
                        title: '',
                        description: ''
                    }}
                    onSubmit={(value) => {
                        this.props.createStream(value)
                        console.log('value', value)
                        setTimeout(() => {
                            alert(JSON.stringify(value));
                        }, 2000);
                    }}
                    validate={this.fieldValidation}
                    render={({ values, errors, handleSubmit, setFieldValue, setFieldError }) => (
                        <Form className="ui form error" onSubmit={handleSubmit}>
                            <StreamFrom
                                values={values}
                                errors={errors}
                                setFieldValue={setFieldValue}
                                setFieldError={setFieldError}
                                onFieldChange={this.onFieldChange}
                            />
                            <button className="ui button secondary" type="submit">Submit</button>
                        </Form>
                    )}
                />
            </div>
        )
    }
};
// const mapStateToProps=(state)=>{
//     return state;
// }
export default connect(null, { createStream })(StreamCreate);
