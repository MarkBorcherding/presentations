// Import React
import React from 'react';
import CodeSlide from 'spectacle-code-slide'
import ImageSlide from 'spectacle-image-slide'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Images
import pointlessMachine from './images/pointlessMachine.gif';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'black',
    secondary: '#bac0cc', 
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);



export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} textColor="secondary">
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Pointless JavaScript
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={4}>
            Mark Borcherding
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} fitj>
            Mark Borcherding
          </Heading>
          <Heading size={4} textColor="secondary">
            :slack @mark.borcherding
            :octocat:/markborcherding
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Pointless JavaScript
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Point-Free JavaScript
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Elevating the readability of JavaScript using functional
            composition, partial function application and currying....and
            without function parameters.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
