import React from 'react';
import { Formik, FormikProps, withFormik, Field, Form } from 'formik';
import * as Yup from "yup";


export class StreamCreate extends React.Component {
    onTitleChange = () => {

    }
    onDescriptionChange = () => {

    }
    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        title: '',
                        description: ''
                    }}
                    onSubmit={(value,event) => {
                        console.log('value',value)
                        setTimeout(() => {
                            alert(JSON.stringify(value));
                        }, 2000);
                    }}
                    // validate=(props)=>{

                    // }
                    render={({ values, errors, handleSubmit, handleChange, setFieldValue, setFieldError }) => (

                        <Form className="ui form" onSubmit={handleSubmit}>
                            <div className="field">
                                <lable htmlfor="title">
                                    Title
                                </lable>
                                <Field
                                    type="text"
                                    name="title"
                                    value={values.title}
                                    onChange={handleChange}
                                //onChange={(ev) => this.onTitleChange(ev, setFieldValue)}
                                />
                            </div>
                            <div className="field">
                                <label hrmlfor="description">
                                    Description
                                </label>
                                <Field
                                    type="text"
                                    name="description"
                                    value={values.description}
                                    onChange={handleChange}
                                // onChange={(ev) => onDescriptionChange(ev, setFieldValue)} 

                                />
                            </div>
                            <button className="ui button primary" type="submit">Submit</button>
                        </Form>
                    )}
                />
            </div>
        )

    }
};

// export default StreamCreate;
