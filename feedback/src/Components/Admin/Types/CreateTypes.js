import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'element-react';

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
               <Form 
                    className="en-US" 
                    model={this.state.form} 
                    labelWidth="120" 
                >
                    <Form.Item label="Feedback Type">
                        <Input value={this.state.form.feedback_type}></Input>
                    </Form.Item>

                    <Form.Item label="Team Type">
                        <Input value={this.state.form.feedback_type}></Input>
                    </Form.Item>

               </Form> 
            </div>
        );
    }
}

export default CreateTypes;