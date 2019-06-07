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
      ,log:null
    }
  }

  onClickState(){
    this.setState({...this.state,log:JSON.stringify(this.state.items)})
  }

  render() {
    const { items } = this.state;
    const layout = []
    for (let i = 0; i < items.length; i) {
      layout.push(
        <SegmentGroup horizontal>
          <Drink item={items[i++]} />
          <Drink item={items[i++]} />
          <Drink item={items[i++]} />
          <Drink item={items[i++]} />
        </SegmentGroup>
      )
    }
    return (
      <Fragment>
        <SegmentGroup size='small'>
          <Segment inverted color='blue' floated='left'>
            <SegmentGroup vertical>
              {
                layout
              }
            </SegmentGroup>
            <InputPanel />
            <SegmentGroup>
              <ExitShelf />
            </SegmentGroup>
          </Segment>
        </SegmentGroup>
        <div>
        <Button onClick={()=>this.onClickState()}>test</Button>
        {
          this.state.log
        }
        </div>
      </Fragment>
    )
  }
}

export default VendingMachine;