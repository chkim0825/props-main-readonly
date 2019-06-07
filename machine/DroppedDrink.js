import React from 'react';
import { Image, Segment } from 'semantic-ui-react';

class DroppedDrink extends React.Component {

    render() {
        return (
            <Segment floated='left' style={{width: 50}}>
                <Image size='mini' src={'https://i.dlpng.com/static/png/1238556-chips-chips-and-soda-png-800_800_preview.png'} style={{transform: 'rotate(90deg)'}}/>
            </Segment>

        );
    }
}

export default DroppedDrink;