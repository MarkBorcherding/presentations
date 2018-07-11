// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
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

        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="js"
          code={require("./sourceExamples/lodashChainNamed.js.txt")}
          textSize="0.8em"
          ranges={[
            { loc: [0, 9], title: "Let's name it" },
            { loc: [10, 12], title: "Now things make sense" },
          ]}/>

        <Slide>
          <Text>How do we think about the problem</Text>
        </Slide>

        <Slide>
          <Heading fit>What are the steps?</Heading>
          <Text textAlign="left">queryStringify</Text>
          <List ordered>
          <Appear><ListItem>remove missing parameters</ListItem></Appear>
          <Appear><ListItem>encode keys and values</ListItem></Appear>
          <Appear><ListItem>join the keys and values with equals</ListItem></Appear>
          <Appear><ListItem>join the parameters with ampersand</ListItem></Appear>
          </List>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="js"
          code={require("./sourceExamples/lodashChainNamed.js.txt")}
          textSize="0.8em"
          ranges={[
            { loc: [0, 9]},
            { loc: [2, 4], title: "Remove missing parameters" },
            { loc: [4, 5], title: "Encode keys and values" },
            { loc: [5, 6], title: "Join the keys and values with =" },
            { loc: [6, 7], title: "Join the parameters with &" },
          ]}/>

        <Slide>
          <Heading fit>Here's that pattern</Heading>
          <Text textAlign="left">queryStringify</Text>
          <List ordered>
            <ListItem>remove missing parameters</ListItem>
            <ListItem>encode keys and values</ListItem>
            <ListItem>join the keys and values with equals</ListItem>
            <ListItem>join the parameters with ampersand</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading padding="1em "fit>What we need is pipe from Bash</Heading>
          <Code textSize="0.8em" padding="1em">
            {`ps -ef | grep "java" | awk '{ print \$2 }' | xargs kill -9 `}
          </Code>
        </Slide>

        <Slide>
          <Heading fit>Let's makeup pipe</Heading>
          <CodePane
            lang="js"
            theme="light"
            textSize="1em"
            source={`
    querystringify = pipe(
      remove missing parameters,
      encode the keys and values,
      join keys and values with equals, 
      join the parameters with ampersand
    ) `}
            />
        </Slide>

        <Slide>
          <Heading fit>A little closer to JS</Heading>
          <CodePane
            lang="js"
            theme="light"
            textSize="1em"
            source={`
    querystringify = pipe(
      removeMissingParameters,
      encodeTheKeysAndValues,
      joinKeysAndValuesWithEquals, 
      joinParametersWithAmpersand
    ) `}
            />
        </Slide>

        <Slide>
          <Heading fit>Functional Composition in 30s</Heading>
          <Text>
            <Code>pipe</Code> takes functions <Code>x→y</Code>,<Code>y→z</Code> 
          </Text>
          <Text>and returns a new function <Code>x→z</Code></Text>
        </Slide>

        <Slide>
          <Heading fit>A really dumb version</Heading>
          <CodePane
            lang="js"
            theme="light"
            textSize="1em"
            padding="1em"
            source={`
    const pipe = (f,g,h) => {
      (x) => {
        return h(g(f(x)))
      }
    }
          `}
          />
        </Slide>

        <Slide>
        <Heading fit>A really dumb version</Heading>
        <CodePane
          lang="js"
          theme="light"
          textSize="1em"
          source={`
    const pipe = (f,g,h) => x => h(g(f(x)))
          `}
          />
        </Slide>


        <Slide>
        <Heading fit>Now pipe makes sense</Heading>
        <CodePane
          lang="js"
          theme="light"
          textSize="1em"
          source={`
        querystringify = pipe(
          removeMissingParameters,
          encodeTheKeysAndValues,
          joinKeysAndValuesWithEquals, 
          joinParametersWithAmpersand
        ) `}
        />
        </Slide>

        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="js"
          textSize="0.8em"
          code={`
const pipe = funcs => x => funcs.reduce((v, f) => f(v), x)


const f = pipe([x=>x+1,
                x=>x*10,
                x=>x +"!"])
f(10)
// '110!'
`}
          ranges={[
            { loc: [1, 2], title: "Pipe is reduce over functions"},
            { loc: [4, 7], title: "Pass pipe some functions"},
            { loc: [4, 9], title: "And invoke it later" },
          ]}/>

        <Slide>
          <Heading padding="1em "fit>What we need is pipe from Bash</Heading>
          <Code textSize="0.8em" padding="1em">
            {`ps -ef | grep "java" | awk '{ print \$2 }' | xargs kill -9 `}
          </Code>
        </Slide>


        <Slide>
          <Heading fit>It's native in Scala</Heading>
          <CodePane
            lang="java"
            theme="light"
            textSize="1em"
            source={`
    val queryStringify = 
      removeMissingParameters
        .andThen(encodeTheKeysAndValues)
        .andThen(joinKeysAndValuesWithEquals)
        .andThen(joinParametersWithAmpersand)
                `}
              />
        </Slide>

        <Slide>
          <Heading>...and Elixir</Heading>
          <CodePane
            lang="elixir"
            theme="light"
            textSize="1em"
            source={`
    "Elixir rocks"    |> 
      String.upcase() |> 
      String.split()
                `}
          />
        </Slide>

        <Slide>
        <Text padding="1em"
              textAlign="left"><Code>pipe</Code> is left to right evaluation</Text>
          <Code>pipe(a,b,c)(x) = c(b(a(x)))</Code>
          <Appear>
            <Text>
              <Text padding="1em" textAlign="left">
              <Code>compose</Code> is right to left evaluation</Text>
              <Code>compose(a,b,c)(x) = a(b(c(x)))</Code>
            </Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading fit>Why do we need two?</Heading>
          <Text >It depends on how someone would think about the problem.</Text>
          <Appear>
            <Text margin="1em" textSize="0.7em"><Code>pipe(step1, step2, step3, step4)</Code></Text>
          </Appear>
          <Appear>
            <Text margin="1em" textSize="0.7em"><Code>compose(avg, hits, top10, nationalLeague, catchers)</Code></Text>
          </Appear>
        </Slide>

        <Slide >
          <Heading >Some advice</Heading>
          <Text >Pick one and stick with it.</Text>
        </Slide>

        <Slide>
          <Heading fit>Back to our example</Heading>
          <CodePane
            lang="js"
            theme="light"
            textSize="1em"
            source={`
    querystringify = pipe(
      removeMissingParameters,
      encodeTheKeysAndValues,
      joinKeysAndValuesWithEquals, 
      joinParametersWithAmpersand
    ) `}
              />
        </Slide>

        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="js"
         code={
`   querystringify = pipe(
      removeMissing,
      urlEncode,
      joinEquals, 
      joinAmpersand
    ) `}
        ranges={[
          { loc: [0,7], title: "With less obnoxious names"},
          { loc: [3,5], title: "These methods sound similar"},
        ]}
        />

      <Slide><Heading>Let's curry!</Heading></Slide>

        <Slide>
          <Heading>Curry in 30s</Heading>
          <Text>
            Currying is taking a function that takes multiple arguments,
            only supplying some and getting back a new function that takes
            the rest.
          </Text>
        </Slide>


        <Slide>
          <Heading>Normal join</Heading>
          <CodePane
            lang="js"
            theme="light"
            textSize="1em"
            source={`
    const join = function(delim, list){
      return list.join(delim);
    } `}
        />
        </Slide>
      
        <Slide>
          <Heading>Curried join</Heading>
          <CodePane
            lang="js"
            theme="light"
            textSize="1em"
            source={`
    const join = function(delim){
      return function(list) {
        return list.join(delim);
      }
`}
        />
        </Slide>

        <Slide>
        <Heading>Curried join</Heading>
        <CodePane
          lang="js"
          theme="light"
          textSize="1em"
          margin="1em"
          source={` const join = delim => list => list.join(delim) `}
        />
        </Slide>

      <Slide><Heading fit>Why aren't we using Lodash?</Heading></Slide>

        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="js"
          code={require("./sourceExamples/lodashCurry.js.txt")}
          textSize="0.7em"
          ranges={[
            { loc: [0,1], title: "The old school way"},
            { loc: [2,3], title: "Let Lodash curry for us"},
            { loc: [4,5], title: "Or curry the function inline"},
            { loc: [6,7], title: "Call it with all the params "},
            { loc: [6,8], title: "..and it evaluate immediately"},
            { loc: [9,10], title: <span>Call it with <i>some</i> parameters</span>},
            { loc: [9,10], title: <span>...and then with the rest</span>},
            { loc: [9,11], title: "And it evaluates"},
            { loc: [12,14], title: "Save that intermediary function"},
            { loc: [15,17], title: "And evaluate it later"},
            { loc: [18,20], title: "And reuse it"},
          ]}
        />


        <Slide>
          <Heading fit>Limitations of _.curry</Heading>
          <Appear><Text textAlign="left">Only fixed arity functions</Text></Appear>
          <List>
            <Appear><ListItem>No default parameters</ListItem></Appear>
            <Appear><ListItem>No args collection</ListItem></Appear>
          </List>
        </Slide>

        <Slide>
          <Text textAlign="left">When would it </Text>
          <Text textAlign="left"><Code>{`huh = _.curry((x, y=1) => x+y)`}</Code></Text>
          <Appear>
            <Text textAlign="left"><Code>huh(1) // Function or 2 </Code></Text>
          </Appear>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="java"
          code={require("./sourceExamples/scalaCurry.scala.txt")}
          textSize="0.7em"
          ranges={[
            { loc: [0,7], title: "Scala = 4 ways to do everything"},
          ]}
        />

      </Deck>
    );
  }
}
