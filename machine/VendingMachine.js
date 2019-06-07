import React, { Fragment } from 'react';
import { Button, Segment, SegmentGroup } from 'semantic-ui-react';
import Drink from "./Drink";
import ExitShelf from "./ExitShelf";
import InputPanel from "./InputPanel";

class VendingMachine extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: 'coke',
          price: 1000,
          quantity: 30
        },
        {
          name: 'cider',
          price: 1100,
          quantity: 20
        },
        {
          name: 'water',
          price: 900,
          quantity: 40
        },
        {
          name: 'coffee',
          price: 1000,
          quantity: 20
        },
        {
          name: 'juice',
          price: 1300,
          quantity: 20,
        },
        {
          name: 'soda',
          price: 1000,
          quantity: 10,
        },
        {
          name: 'tea',
          price: 1000,
          quantity: 20
        },

      ]
    }
  }

  render() {
    const { items } = this.state;
    return (
        <SegmentGroup size='small'>
          <Segment inverted color='blue' floated='left'>
            <SegmentGroup vertical>
              <SegmentGroup horizontal>
              <Drink item={items[0]}/>
              </SegmentGroup>
            </SegmentGroup>
            <InputPanel />
            <SegmentGroup>
              <ExitShelf />
            </SegmentGroup>
          </Segment>
        </SegmentGroup>
    )
  }
}

export default VendingMachine;