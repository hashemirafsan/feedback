import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Dialog, Button } from 'element-react';

class CreateTypes extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        form: {
            feedback_type: "",
            team_type: ""
        }
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
                    <Button type="primary" onClick={ () => this.props.onSave(this.state) }>Confirm</Button>
                </Dialog.Footer>
            </div>
        );
    }
}

CreateTypes.propTypes = {
    onSave: PropTypes.func,
    onClose: PropTypes.func,
}

export default CreateTypes;