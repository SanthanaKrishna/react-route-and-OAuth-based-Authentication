import React from 'react';
import { Formik, FormikProps, withFormik, Field, Form } from 'formik';
import * as Yup from "yup";


export class StreamCreate extends React.Component {
    onTitleChange = () => {

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
                        setTimeout(() => {
                            alert(JSON.stringify(value));
                        }, 2000);
                    }}
                    validationSchema={{}}
                    render={(props) => (

                        <Form onSubmit={props.handleSubmit}>
                            <div>
                                <lable htmlfor="title">
                                    Title
                                </lable> <br />
                                <Field
                                    type="text"
                                    name="title"
                                    value=
                                    onChange={this.onTitleChange}
                                />
                            </div>
                            <div>
                                <label hrmlfor="description">
                                    Description
                                </label>
                                <br />
                                <Field type="text" name="description" />
                            </div>
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                />
            </div>
        )

    }
};

// export default StreamCreate;
