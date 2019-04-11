import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.getStreams();
    }
    listOfStream = () => {
        const { streams } = this.props;
        return streams.map((stream) => {
            return (
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera" /> {/*for icon*/}
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                    {this.renderAdmin(stream)}
                </div>
            )
        })
    }
    renderAdmin = (stream) => {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streamedit/${stream.id}`} className="ui button primary">Edit </Link>
                    <Link to={`/streamdelete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            )
        }
    }
    createStream = () => {
        const { isSignedIn } = this.props
        if (isSignedIn) {
            return (
                <div style={{ textAlign: "right" }}>
                    <Link to="/streamnew" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            )
        }
    }
    render() {
        console.log('streamslist', this.props);
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.listOfStream()}
                    {this.createStream()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const { streams, auth } = state
    return {
        streams: Object.values(streams),
        currentUserId: auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps, { getStreams })(StreamList);

