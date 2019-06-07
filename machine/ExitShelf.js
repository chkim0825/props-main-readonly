import React from 'react';
import {Segment, SegmentGroup} from 'semantic-ui-react';
import DroppedDrink from "./DroppedDrink";

class ExitShelf extends React.Component {

    render() {
        return (
            <SegmentGroup horizontal >
                <DroppedDrink/>
            </SegmentGroup>
        )
    }
}

export default ExitShelf;