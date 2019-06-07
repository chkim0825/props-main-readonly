import React from 'react';
import { Segment, Card, Icon, Image, Label, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
class Drink extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <Segment inverted style={{ width: 100 }}>
        <Image src={'https://i.dlpng.com/static/png/1238556-chips-chips-and-soda-png-800_800_preview.png'} size='mini' centered />
        <Card.Content>
          <Card.Header style={{ textAlign: 'center' }}></Card.Header>
          <Card.Meta style={{ textAlign: 'center' }}>₩ </Card.Meta>
        </Card.Content>
        <Card.Content extra >
          <Card.Header style={{ textAlign: 'center' }}> 
            <Button size='mini' as='div' labelPosition='right'>
              <Button size='mini' color='red' >GET</Button>
              <Label as='a' basic color='red' pointing='left'></Label>
            </Button>
          </Card.Header>
        </Card.Content>
      </Segment>
    );
  }
}


// const Drink = () => {
//   return (
//       <Segment inverted style={{ width: 100 }}>
//         <Image src={'https://i.dlpng.com/static/png/1238556-chips-chips-and-soda-png-800_800_preview.png'} size='mini' centered />
//         <Card.Content>
//           <Card.Header style={{ textAlign: 'center' }}></Card.Header>
//           <Card.Meta style={{ textAlign: 'center' }}>₩ </Card.Meta>
//         </Card.Content>
//         <Card.Content extra >
//           <Card.Header style={{ textAlign: 'center' }}>
//             <Button size='mini' as='div' labelPosition='right'>
//               <Button size='mini' color='red' >GET</Button>
//               <Label as='a' basic color='red' pointing='left'></Label>
//             </Button>
//           </Card.Header>
//         </Card.Content>
//       </Segment>
//   )
// }
export default Drink;