import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { getQuestions } from '../../../Store/Actions/_actions';

class SingleTypes extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    componentDidMount() {
        const { params } = this.props.match;
        this.props.getQuestions(params.id);
    }

    componentWillReceiveProps(props) {
        this.props = props;
        console.log(this.props)
    }

    render() {
        return(
            <div>Hello</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getQuestions
    }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleTypes));