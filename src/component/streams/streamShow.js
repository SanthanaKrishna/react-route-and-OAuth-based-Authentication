import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import flv from 'flv.js';

class StreamShow extends React.Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef()
    }
    componentDidMount() {
        const { id = '' } = this.props.match.params;
        this.props.fetchStream(id);
        this.buildPlayer();
    }
    componentDidUpdate() {
        this.buildPlayer();
    }
    componentWillUnmount() {
        this.player.destroy();
    }
    buildPlayer() {
        const { id = '' } = this.props.match.params;
        if (this.player || !this.props.stream) {
            return;
        }
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
        this.player.play();
    }
    render() {
        const { stream = {} } = this.props;
        console.log('showstream', this.props);
        const { title = '', description = '' } = stream
        if (!stream) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <video ref={this.videoRef} style={{ width: '50%' }} controls={true} />
                <h1>{title}</h1>
                <h3>{description}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchStream })(StreamShow)
