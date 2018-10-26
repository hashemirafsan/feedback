import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Layout, Button, Dialog } from 'element-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTypes } from '../../../Store/Actions/_actions';
import CreateTypes from './CreateTypes';


class Types extends Component {
    constructor(props) {
        super(props);
        this.props.getTypes()
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    state = {
        dialogVisible: false,
        columns: [
            {
                label: "Feedback Type",
                prop: "feedback_type"
            },
            {
                label: "Team Type",
                prop: "team_type"
            },
            {
                label: "Actions",
                render: (row, col, index) => {
                    return (
                        <span>
                            
                        </span>
                    )
                }
            }
        ]
    }

    render() {
        return(
            <div>
                <br/>
                <Layout.Row gutter={20}>
                    <Layout.Col offset="22">
                        <Button 
                            plain={true} 
                            icon="plus" 
                            type="info"
                            onClick={() => this.setState({ dialogVisible: true })}
                        > Add</Button>
                    </Layout.Col>
                </Layout.Row>
                <br/>
                <Table
                    style={{width:'100%'}}
                    columns={this.state.columns}
                    data={[]}
                    border={true}
                ></Table>

                <Dialog
                    title="Tips"
                    size="tiny"
                    visible={ this.state.dialogVisible }
                    onCancel={ () => this.setState({ dialogVisible: false }) }
                    lockScroll={ false }
                >
                    <Dialog.Body>
                        <CreateTypes/>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <Button onClick={ () => this.setState({ dialogVisible: false }) }>Cancel</Button>
                        <Button type="primary" onClick={ () => this.setState({ dialogVisible: false }) }>Confirm</Button>
                    </Dialog.Footer>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getTypes
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Types);