import React from 'react';
import { Input, Label, Segment} from 'semantic-ui-react';

class InputPanel extends React.Component {

    render() {
        return (
            <Segment inverted color='blue' textAlign='center'>
                <Input labelPosition='left' type='text'>
                    <Label basic>₩</Label>
                    <input />
                </Input>
            </Segment>
        );
    }
}

export default InputPanel;