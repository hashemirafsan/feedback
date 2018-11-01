import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Dialog, Button, Notification } from 'element-react';

class CreateTypes extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        feedback_type: "",
        team_type: ""
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    saveForm = () => {
        const { feedback_type, team_type } = this.state;
        if (! feedback_type && ! team_type) {
            Notification({
                title: 'Warning',
                message: 'Feedback type and Team type is required!',
                type: 'warning'
            });
            return;
        }

        this.props.onSave(this.state)

        Notification({
            title: 'Success',
            message: "Successfully Created Types!",
            type: 'success'
        });

        this.setState({ feedback_type: "", team_type: "" });

        this.props.onClose();
    }

    render() {
        return(
            <div>
                <Dialog.Body>
                    <Form 
                        className="en-US" 
                        model={this.state.form} 
                        labelWidth="120" 
                    >
                        <Form.Item label="Feedback Type">
                            <Input 
                                value={this.state.feedback_type}
                                onChange={(e) => this.setState({ feedback_type: e })}
                            ></Input>
                        </Form.Item>

                        <Form.Item label="Team Type">
                            <Input 
                                value={this.state.team_type}
                                onChange={(e) => this.setState({ team_type: e })}
                            ></Input>
                        </Form.Item>

                    </Form> 
                </Dialog.Body>
                <Dialog.Footer className="dialog-footer">
                    <Button onClick={ () => this.props.onClose() }>Cancel</Button>
                    <Button 
                        type="primary" 
                        onClick={ () => this.saveForm() }
                        loading={ this.props.onData.loading }
                    >Confirm</Button>
                </Dialog.Footer>
            </div>
        );
    }
}

CreateTypes.propTypes = {
    onSave: PropTypes.func,
    onClose: PropTypes.func,
    onData: PropTypes.any,
}

export default CreateTypes;