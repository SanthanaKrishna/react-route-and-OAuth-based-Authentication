import React from 'react';
import { Formik, FormikProps, withFormik, Field, Form } from 'formik';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
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
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                />
            </div>
        )

    }
};
//state: show how applation state
// 2nd params ownProps: i=show state inside the required component 
const mapStateToProps = (state, ownProps) => {
    console.log("state", state);
    console.log("ownProps", ownProps);
    const { streams } = state;
    return { stream: streams[ownProps.match.params.id] }
}
export default connect(mapStateToProps,{fetchStream})(StreamEdit);