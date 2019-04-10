import React from 'react';
import { Formik, FormikProps, withFormik, Field, Form } from 'formik';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import { Stream } from 'stream';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }



    render() {
        console.log("this.props", this.props);
        const {stream}=this.props;
        if (!this.props.stream) {
            return <div> loading ....</div>
        }

        return (
            <div>
                <h3>Edit Stream</h3>
                <Formik
                    initialValues={{
                        title: stream.title,
                        description: stream.description
                    }}
                    onSubmit={(values) => {
                        this.props.editStream(this.props.match.params.id, values)
                        setTimeout(() => {
                            alert(JSON.stringify(values));
                        }, 2000);
                    }}
                    validationSchema={{}}
                    render={({ values, errors, handleSubmit, handleChange, setFieldValue, setFieldError }) => (

                        <Form className="ui form" onSubmit={handleSubmit}>
                            <div className="field">
                                <lable htmlFor="title">
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
                                <label hrmlFor="description">
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
    const {streams} = state
    return {
        stream :streams[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);