import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Layout, Button, Dialog, Loading, Popover } from 'element-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTypes, postTypes, setIsAuthenticated } from '../../../Store/Actions/_actions';
import CreateTypes from './CreateTypes';
import { withRouter } from 'react-router-dom';
import { chunk } from 'lodash';
import './css/types.css';


class Types extends Component {
    constructor(props) {
        super(props);
        this.props.setIsAuthenticated();
    }

    componentDidMount() {
        this.props.getTypes()
    }

    componentWillReceiveProps(props) {
        console.log(props);
        this.props = props;
    }

    state = {
        dialogVisible: false,
        columns: [
            {
                label: "#ID",
                prop: "_id"
            },
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
                            <Button type="info" icon="edit" size="mini">Edit</Button>
                            <Popover placement="top" width="160" trigger="click" visible={this.state.visible} content={(
                            <div>
                                <p>Are you sure to delete this？</p>
                                <div style={{textAlign: 'right', margin: 0}}>
                                <Button size="mini" type="text" onClick={() => {}}>Cancel</Button>
                                <Button type="primary" size="mini" onClick={() => {}}>Confirm</Button>
                                </div>
                            </div>
                            )}>
                                <Button type="danger" icon="delete2" size="mini">Delete</Button>
                            </Popover>
                        </span>
                    )
                }
            }
        ]
    }

    updateTypes = () => {
        let data = this.props.Types.types;
        if (data) {
            data.push(null);            
        } else {
            data = [null];
        }
        return chunk(data, 6);
    }

    showDataFolder = (col) => {
        if (col) {
            return (
                <div 
                    className="box" 
                    onClick={ () => { 
                        const { history } = this.props;
                        history.push(`/admin/type/${col._id}`)
                    } }
                >
                    <div className="box-icon"><i className="el-icon-document"></i></div>
                    <div className="box-content">{ col.feedback_type }</div>
                </div>
            )
        } else {
            return (
                <div 
                    className="box"
                    onClick={() => this.setState({ dialogVisible: true })}
                >
                    <div className="box-icon"><i className="el-icon-plus"></i></div>
                    <div className="box-content">Add New</div>
                </div>
            )
        }
    }

    showDataCol = (row) => {
        return row.map((col, key) => {
            return (
                <Layout.Col span="4" key={key}>
                    { this.showDataFolder(col) }
                </Layout.Col>
            )
        })
    }

    showDataRow = () => {
        const data = this.updateTypes();
        return data.map((row, key) => {
            return (
                <Layout.Row key={key} class="data">
                    { this.showDataCol(row) }
                </Layout.Row> 
            )
        })
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
                
                <Loading
                    text="Types"
                    loading={this.props.Types.loading}
                >   
                    { this.showDataRow() }
                    {/* <Table
                        style={{width:'100%'}}
                        columns={this.state.columns}
                        data={this.props.Types.types}
                        border={true}
                    ></Table> */}
                </Loading>

                <Dialog
                    title="Add Types"
                    size="tiny"
                    visible={ this.state.dialogVisible }
                    onCancel={ () => this.setState({ dialogVisible: false }) }
                    lockScroll={ false }
                >
                    <CreateTypes
                        onSave={(state) => { this.props.postTypes(state) }}
                        onClose={() => this.setState({ dialogVisible: false })}
                        onData={this.props.Types}
                    />
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
        getTypes,
        postTypes,
        setIsAuthenticated
    }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Types));