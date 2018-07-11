// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from "spectacle/lib/themes/default";



// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} transition={[]} transitionDuration={0} progress="bar">
        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Pointless JavaScript
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} fit>
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
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Elevating the readability of JavaScript
            <span>and Scala</span> using
            functional composition, partial function application and
            currying....and without function parameters.
          </Heading>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="secondary">
            Disclaimer
          </Heading>
          <Text textColor="secondary" textAlign="left">I am not...</Text>
          <List>
            <Appear><ListItem>a JavaScript expert</ListItem></Appear>
            <Appear><ListItem>a functional programming expert</ListItem></Appear>
            <Appear><ListItem>an expert</ListItem></Appear>
          </List>
        </Slide>

        <Slide>
          <Heading>Unsuccessfully convinced people</Heading>
          <Text >  it's unfamiliar
            
            | Familiarity can be acquired; complexity is intrinsic.
            - https://sanctuary.js.org
            
            it feels less clear
          </Text>
        </Slide>

        <Slide>
          <Heading>What is </Heading>
          <Heading>Point-Free</Heading>
          <Heading>programming?</Heading>
          <Appear>
            <Text>...it's tacit programming</Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading fit>What is tacit programming?</Heading>
          <Text> ...writing function that don't define arguments </Text>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading textColor="primary" size={4}>mandatory wikipedia quote: </Heading>
          <BlockQuote>
            <Quote textSize="1em"> 
              Tacit programming, also called point-free style, is a programming paradigm in
              which function definitions do not identify the arguments (or "points") on which
              they operate. Instead the definitions merely compose other functions, among
              which are combinators that manipulate the arguments.
            </Quote>
            <Cite>
              https://en.wikipedia.org/wiki/Tacit_programming
            </Cite>
          </BlockQuote>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          theme="dark"
          transition={[]}
          lang="js"
          code={require("./sourceExamples/exampleFunction.js.txt")}
            ranges={[
              { loc: [0, 7], title: "Find the points" },
              { loc: [4, 5], title: "The dots?" },
              { loc: [3, 4], title: "The stabby arrows?" },
              { loc: [1, 2], title: "The function parameters!" },
            ]}/>

        <CodeSlide
          bgColor="secondary"
          theme="dark"
          transition={[]}
          lang="js"
          code={require("./sourceExamples/examplePointFreeFunction.js.txt")}
          ranges={[
            { loc: [0, 2], title: "A Point Free Version" },
            { loc: [0, 3], title: "It's a function" },
            { loc: [0, 5], title: "...and then we call it" },
            { loc: [0, 6], title: "...it evaluates"},
          ]}/>

        <Slide>
          <Text>We're making small, multipurpose, composable functions</Text>
          <Appear><Text>..and we'll build up more complex ones.</Text></Appear>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          theme="dark"
          transition={[]}
          lang="js"
          code={require("./sourceExamples/badExample.js.txt")}
          textSize="0.9em"
          ranges={[
            { loc: [0, 11], title: "What does this do?" },
            { loc: [0, 11], title: "No one knows" },
          ]}/>

        <Slide>
          <Text>Who doesn't love Lodash?</Text>
          <Appear>
            <Text fit>
              :octocat:/you-dont-need/You-Dont-Need-Lodash-Underscore
            </Text>
          </Appear>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="js"
          code={require("./sourceExamples/lodashFirst.js.txt")}
          textSize="0.8em"
          ranges={[
            { loc: [0, 7], title: "Closer to what we expect" },
            { loc: [0, 7], title: "Notice a pattern" },
            { loc: [1, 2], title: "Each line..." },
            { loc: [1, 3], title: "...is the first input" },
            { loc: [2, 4], title: "...to the next" },
            { loc: [3, 5], title: "...and the next" },
          ]}/>

        <Slide>
          <Text>Help me Lodash</Text>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="js"
          code={require("./sourceExamples/lodasChain.js.txt")}
          textSize="0.8em"
          ranges={[
            { loc: [0, 9], title: "Typical code" },
          ]}/>




      </Deck>
    );
  }
}
