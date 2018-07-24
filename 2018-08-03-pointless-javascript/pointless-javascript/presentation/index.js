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
  Image,
  ListItem,
  List,
  Notes,
  Quote,
  Slide,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';
import Terminal from "spectacle-terminal";

// Import theme
import createTheme from "spectacle/lib/themes/default";

require('prismjs/components/prism-scala')


const images = {
  more: require('../assets/more.gif'),
  maz: require('../assets/maz.gif'),
  distracted: require('../assets/distracted.jpg')
};

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE",
    code: '#2a2734'
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} transition={[]} transitionDuration={0} progress="number">

        <Slide bgColor="code">
          <Heading size={1} fit lineHeight={1}>
            Pointless JavaScript
          </Heading>
        </Slide>

        <Slide bgImage={require("../assets/hi.gif")} bgPosition="top"> 
          <Heading size={1} fit>
            Mark Borcherding
          </Heading>
            
            <Text textSize="2em" bold textColor="primary" textAlign="left">
              <img
                src={require("../assets/slack.png")}
                style={{
                  height: "1.5em",
                  width: "1.5em",
                  display: "inline-block",
                  verticalAlign: "middle"
                }}
                /> 
                @mark.borcherding
            </Text>
            <Text textSize="2em" bold textColor="primary" textAlign="left">
              <img
                src={require("../assets/octocat.png")}
                style={{
                  height: "1.5em",
                  width: "1.5em",
                  display: "inline-block",
                  verticalAlign: "middle"
                }}
                /> 
              markborcherding
            </Text>
        </Slide>
        
        <Slide>
          <Heading size={1} fit lineHeight={1}>
            Pointless JavaScript
          </Heading>
        </Slide>

        <Slide bgImage={ require("../assets/pointless.gif") } ></Slide>
        
        <Slide bgImage={ require("../assets/leftpad.png") } bgPosition="top" ></Slide>

        <Slide>
          <Heading size={1} fit lineHeight={1}>
            Pointless JavaScript
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit lineHeight={1}>
            Point-free JavaScript
          </Heading>
        </Slide>

        <Slide bgColor="primary">
          <Heading textSize="2em">
            Elevating the readability of JavaScript using functional
            composition, partial function application and currying....and
            without function parameters.
          </Heading>
        </Slide>
        
        <Slide>
          <Heading textSize="2em">
            Elevating the readability of JavaScript <span style={{color: "red"}}>and Scala</span> using
            functional composition, partial function application and
            currying....and without function parameters.
          </Heading>
        </Slide>

        <Slide bgColor="primary" bgImage={require("../assets/fly.gif")}>
          <Heading>
            Disclaimer
          </Heading>
          <Text textSize="2em" bold textAlign="left" textColor="primary">
            I am not
          </Text>

          <List textColor="primary" bold>
            <Appear><ListItem>a JavaScript expert</ListItem></Appear>
            <Appear><ListItem>a functional programming expert</ListItem></Appear>
            <Appear><ListItem>an expert</ListItem></Appear>
          </List>
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

        <Slide bgColor="code" textColor="primary">
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
          bgColor="code"
          theme="dark"
          transition={[]}
          lang="js"
          code={require("./sourceExamples/exampleFunction.js.txt")}
          ranges={[
            { loc: [0, 7], title: "Find the points" },
            { loc: [4, 5], title: "The dots?" },
            { loc: [3, 4], title: "The stabby arrows?" },
            { loc: [1, 2], title: "The function parameters!" },
          ]}>

        </CodeSlide>

        <CodeSlide
          bgColor="code"
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
          bgColor="code"
          theme="dark"
          transition={[]}
          lang="js"
          code={require("./sourceExamples/badExample.js.txt")}
          textSize="0.9em"
          ranges={[
            { loc: [0, 11], title: "What does this do?" },
            { loc: [0, 11], title: "No one knows" },
          ]}/>


        <Slide bgImage={require("../assets/head.explode.gif")} />

        <Slide>
          <Text>...so let's make it better</Text>
        </Slide>

        <Slide>
          <Text margin="1em 0">Who doesn't love Lodash?</Text>
          <Appear>
            <Text fit>
              <img src={require("../assets/octocat.dark.png")} style={{height: "1em", width: "1em", }}/>/you-dont-need/You-Dont-Need-Lodash-Underscore
            </Text>
          </Appear>
        </Slide>

        <CodeSlide
          bgColor="code"
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
          bgColor="code"
          transition={[]}
          lang="js"
          code={require("./sourceExamples/lodasChain.js.txt")}
          textSize="0.8em"
          ranges={[
            { loc: [0, 9], title: "Typical code" },
          ]}/>

        <CodeSlide
          bgColor="code"
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
          bgColor="code"
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
          <Heading fit>What we need is pipe from Bash</Heading>
          <Terminal
            title="1: ~(zsh)"
            output={[`$ ps -ef | grep "java" | awk '{ print \$1 }' | xargs kill -9 `]}
          />
        </Slide>

        <Slide bgColor="code">
          <Heading fit>Let's makeup pipe</Heading>
          <CodePane
            lang="js"
            theme="external"
            textSize="1em"
            source={require("./sourceExamples/stepsAsText.txt")}
            />
        </Slide>

        <Slide bgColor="code">
          <Heading fit>A little closer to JS</Heading>
          <CodePane
            lang="js"
            theme="external"
            textSize="1em"
            source={require("./sourceExamples/stepsAsJs.js.txt")}
            />
        </Slide>

        <Slide>
          <Heading fit>Functional Composition in 30s</Heading>
          <Text>
            <Code>pipe</Code> takes functions <Code>x&rarr;y</Code>
            , <Code>y&rarr;z</Code>
          </Text>
          <Text>and returns a new function <Code>x&rarr;z</Code></Text>
        </Slide>

        <Slide bgColor="code">
          <Heading fit>A really dumb version</Heading>
          <CodePane
            lang="js"
            theme="external"
            textSize="1em"
            padding="1em"
            source={`
    const pipe = (f,g,h) => {
      return (x) => {
        return h(g(f(x)))
      }
    }
            `}
            />
        </Slide>

        <Slide bgColor="code">
          <Heading fit>A really dumb version</Heading>
          <CodePane
            lang="js"
            theme="external"
            textSize="1em"
            source={`
    const pipe = (f,g,h) => x => h(g(f(x)))
            `}
            />
        </Slide>


        <Slide bgColor="code">
          <Heading fit>Now pipe makes sense</Heading>
          <CodePane
            lang="js"
            theme="external"
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
          bgColor="code"
          transition={[]}
          lang="js"
          textSize="0.8em"
          code={`
// [(a→b), (b→c), ..., (y→z)] → a → z
const pipe = funcs => x => funcs.reduce((v, f) => f(v), x)


const f = pipe([x=>x+1,
                x=>x*10,
                x=>x +"!"])
f(10)
// '110!'
          `}
          ranges={[
            { loc: [1, 3], title: "Pipe is reduce over functions"},
            { loc: [5, 8], title: "Pass pipe some functions"},
            { loc: [5, 10], title: "And invoke it later" },
          ]}/>

        <Slide>
          <Heading fit>We use it in Bash all the time</Heading>
          <Terminal title="1: ~(zsh)" output={[`$ ps -ef | grep "java" | awk '{ print \$2 }' | xargs kill -9 `]} />
        </Slide>

        <Slide bgColor="code">
          <Heading fit>It's native in Scala</Heading>
          <CodePane
            lang="scala"
            theme="external"
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

        <Slide bgColor="code">
          <Heading>...and Elixir</Heading>
          <CodePane
            lang="elixir"
            theme="external"
            textSize="1em"
            source={`
    "Elixir rocks"    |>
      String.upcase() |>
      String.split()
      `}
          />
        </Slide>

        <Slide bgColor="code">
          <Heading>...and Elm</Heading>
          <CodePane
            lang="haskell"
            theme="external"
            textSize="1em"
            source={`
      viewNames names =
        names
          |> List.sort
          |> String.join ", "
`}
      />
        </Slide>

        <Slide>
          <Heading fit>...maybe someday in JavaScript</Heading>
          <Text margin="1em 0">
            <img src={require("../assets/octocat.dark.png")} style={{height: "1em", width: "1em", }}/>
            /tc39/proposal-pipeline-operator
          </Text>
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
            <Text margin="1em"><Code textSize="0.6em">pipe(step1, step2, step3, step4)</Code></Text>
          </Appear>
          <Appear>
            <Text margin="1em"><Code textSize="0.6em">compose(avg, hits, top10, nationalLeague, catchers)</Code></Text>
          </Appear>
        </Slide>

        <Slide >
          <Heading >Some advice</Heading>
          <Text >Pick one and stick with it.</Text>
        </Slide>

        <Slide bgColor="code">
          <Heading fit>Back to our example</Heading>
          <CodePane
            lang="js"
            theme="external"
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
          bgColor="code"
          transition={[]}
          lang="js"
          code={
            `querystringify = pipe(
  removeMissing,
  urlEncode,
  joinEquals,
  joinAmpersand
) `}
          ranges={[
            { loc: [0, 7], title: "With less obnoxious names" },
            { loc: [3, 5], title: "These methods sound similar" },
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


        <Slide bgColor="code">
          <Heading>Normal join</Heading>
          <CodePane
            lang="js"
            theme="external"
            textSize="1em"
            source={`
    const join = function(delim, list){
      return list.join(delim);
    } 
  `}
          />
        </Slide>

        <Slide bgColor="code">
          <Heading>Curried join</Heading>
          <CodePane
            lang="js"
            theme="external"
            textSize="1em"
            source={`
    const join = function(delim){
      return function(list) {
        return list.join(delim);
    }
              `}
          />
        </Slide>

        <Slide bgColor="code">
          <Heading>Curried join</Heading>
          <CodePane
            lang="js"
            theme="external"
            textSize="1em"
            margin="1em"
            source={` const join = delim => list => list.join(delim) `}
          />
        </Slide>

        <Slide><Heading fit>Why aren't we using Lodash?</Heading></Slide>

        <CodeSlide
          bgColor="code"
          transition={[]}
          lang="js"
          code={require("./sourceExamples/lodashCurry.js.txt")}
          textSize="0.7em"
          ranges={[
            { loc: [0, 1], title: "The old school way" },
            { loc: [2, 3], title: "Let Lodash curry for us" },
            { loc: [4, 5], title: "Or curry the function inline" },
            { loc: [6, 7], title: "Call it with all the params " },
            { loc: [6, 8], title: "..and it evaluate immediately" },
            { loc: [9, 10], title: <span>Call it with <i>some</i> parameters</span> },
            { loc: [9, 10], title: <span>...and then with the rest</span> },
            { loc: [9, 11], title: "And it evaluates" },
            { loc: [12, 14], title: "Save that intermediary function" },
            { loc: [15, 17], title: "And evaluate it later" },
            { loc: [18, 20], title: "And reuse it" },
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
          <Text textAlign="left">What would this return? </Text>
          <CodePane lang="js" theme="light" textSize="1em" source={`huh = _.curry((x, y=1) => x+y)`} />
          <CodePane lang="js" theme="light" textSize="1em" source={`huh(1) // Function or 2 `} />
        </Slide>

        <CodeSlide
          bgColor="code"
          transition={[]}
          lang="scala"
          code={require("./sourceExamples/scalaCurry.scala.txt")}
          textSize="0.7em"
          ranges={[
            { loc: [0, 7], title: "Scala = 4 ways to do everything" },
            { loc: [0, 1], title: "Explicitly in a method" },
            { loc: [2, 3], title: "Explicitly in a function" },
            { loc: [4, 5], title: "Some magic" },
            { loc: [6, 7], title: "Placeholder magic" },
          ]}
        />

        <CodeSlide
          bgColor="code"
          transition={[]}
          lang="javascript"
          code={`
  const join = j => list => list.join(j)

  const querystringify = pipe(
    removeMissing,
    urlEncode,
    join("="),
    join("&")
  )
            `}
          textSize="0.7em"
          ranges={[
            { loc: [1, 2], title: "Now we have a curried join" },
            { loc: [2, 9], title: "Use it in our function" },
            { loc: [6, 8], title: "It replaces both usages" },
          ]}
        />

        <Slide>
          <Heading fit>Y U No _.join ?</Heading>
          <Text margin="2em 0">
            <Code padding="1em"> _.join(array, [separator=',']) </Code>
          </Text>
        </Slide>

        <Slide>
          <Heading>2 problems</Heading>
          <List>
            <Appear><ListItem>the data comes first</ListItem></Appear>
            <Appear><ListItem>it isn't fixed arity</ListItem></Appear>
          </List>
        </Slide>

        <Slide bgColor="code">
          <Heading fit>Example problem</Heading>
          <CodePane
            lang="js"
            theme="external"
            textSize="1em"
            source={`
  const f = _.join([1,2,3])
  // [Function] or "1,2,3"
                `}
          />
        </Slide>

        <Slide>
          <Heading fit>Lodash's secret identity</Heading>
        </Slide>

        <Slide>
          <Heading fit>Lodash FP</Heading>
        </Slide>

        <Slide bgImage={require("../assets/lodash.png")}>
        </Slide>

        <Slide bgImage={require("../assets/fpbutton.png")}>
        </Slide>

        <Slide>
          <Heading>Data Last</Heading>
          <Text
            textAlign="left"
            margin="1em 0"
          >
            <Code>_.join(array, [separator = ","])</Code> </Text>
          <Appear>
            <Text textAlign="left"><Code>fp.join(separator, array)</Code> </Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading>Simple Curry</Heading>
          <Text
            textAlign="left"
            margin="1em 0" >
            <Code> dashIt = _.curry(_.join)(_._, "-")</Code></Text>
          <Appear><Text textAlign="left"><Code>dashIt = fp.join("-")</Code> </Text></Appear>
        </Slide>

        <Slide>
          <Heading>Fixed Arity</Heading>
          <Text>Fixed arity means no default args.</Text>
          <Text textAlign="left" margin="1em 0">
            <Code textSize="0.9em"> _.get(object, path, [defaultValue])</Code>
          </Text>
        </Slide>

        <Slide>
          <Heading fit>Aliases to the Rescue</Heading>
          <Text textAlign="left" margin="1em 0">
            <Code>fp.get(path, object) </Code></Text>
          <Text textAlign="left" margin="1em 0">
            <Code>fp.getOr(path, object, default) </Code></Text>
        </Slide>

        <CodeSlide
          bgColor="code"
          lang="javascript"
          code={`
const join = require('lodash/fp/join')

const querystringify = pipe(
  removeMissing,
  urlEncode,
  join("="),
  join("&")
)
`}
          ranges={[
            { loc: [1, 2], title: "Require fp.join" },
            { loc: [3, 8] },
            { loc: [6, 8], title: "No change in usage" },
          ]}
        />

        <Slide>
          <Heading fit>What else?</Heading>
        </Slide>

        <CodeSlide
          bgColor="code"
          lang="javascript"
          code={`
const join = require('lodash/fp/join')
const pipe = require('lodash/fp/pipe')

const querystringify = pipe([
  removeMissing,
  urlEncode,
  join("="),
  join("&")
])
            `}
          ranges={[
            { loc: [2, 3], title: "fp.pipe" },
            { loc: [4, 10], title: "Wrap functions in array" },
            { loc: [5, 6], title: "Let's implement this" },
          ]}
        />

        <CodeSlide
          bgColor="code"
          lang="javascript"
          code={
            `const fp = require("lodash/fp")

// {a: 1, b: null} → [[a,1]]
const removeMissing = fp.pipe([
  fp.pairs,
  fp.filter(([k,v]) => ! fp.isNil(v))
])

const querystringify = fp.pipe([
  removeMissing,
  encode,
  fp.join("="),
  fp.join("&")
]) `}
          ranges={[
            { loc: [0, 1], title: "We're going to use more of fp" },
            { loc: [2, 7] },
            { loc: [3, 4], title: "fp.pipe is a almost everywhere" },
            { loc: [4, 5], title: "tuple the object" },
            { loc: [5, 6], title: "remove undefined values" },
            { loc: [2, 3], title: "func takes obj → arr" },
            { loc: [3, 7], title: "...but there's points" },
            { loc: [5, 7], title: "[k,v] are function parameters" },
          ]}
        />

        <Slide><Heading fit>The Pointfree Version</Heading></Slide>

        <CodeSlide
          bgColor="code"
          lang="javascript"
          code={
            `const fp = require("lodash/fp")

// {a: 1, b: null} → [[a,1]]
const removeMissing = fp.pipe([
  fp.pairs,
  fp.filter(
    fp.negate(
      fp.pipe(
        fp.at(1),
        fp.isNil)))
])

const querystringify = fp.pipe([
  removeMissing,
  encode,
  fp.join("="),
  fp.join("&")
                ]) `}
          ranges={[
            { loc: [3, 11], title: "OMG! What?" },
          ]}
        />


        <CodeSlide
          bgColor="code"
          lang="javascript"
          code={
            `// [k,v] → Bool
const valuePresent =
  fp.negate(
    fp.pipe(
      fp.at(1),
      fp.isNil)))

const removeMissing = fp.pipe([
  fp.pairs,
  fp.filter(valuePresent)
])

const querystringify = fp.pipe([
  removeMissing,
  urlEncode,
  fp.join("="),
  fp.join("&")
]) `}
          ranges={[
            { loc: [0, 6], title: "Make functions smaller" },
            { loc: [7, 11], title: "Easier to understand" },
          ]}
        />

        <Slide bgColor="code">
          <Heading>Even Easier</Heading>
          <CodePane
            lang="js"
            theme="external"
            textSize="1em"
            source={`
    const removeMissing =
      fp.pickBy(fp.negate(fp.isNil))
                  `}
          />
        </Slide>


        <CodeSlide
          bgColor="code"
          lang="javascript"
          code={
            `// {k: v, ...} → [[f(k): f(v)], ...]
const encode =
  fp.pipe([
    fp.toPairs,
    fp.map(
      fp.map(lib.urlEncode))])
                `}
          ranges={[
            { loc: [0, 6], title: "Our encode function" },
            { loc: [0, 2], title: "take an object and return tuple" },
            { loc: [2, 3], title: "familiar pipe" },
            { loc: [3, 4], title: "convert to tuples" },
            { loc: [4, 5], title: "for each tuple" },
            { loc: [5, 6], title: "apply the function to both sides" },
            { loc: [4, 6], title: "common pattern" },
          ]}
        />

        <CodeSlide
          bgColor="code"
          lang="javascript"
          code={
            `// {k: v, ...} → [[f(k): f(v)], ...]
const encode =
  fp.pipe([
    fp.toPairs,
    fp.flatMap(lib.urlEncode),
    fp.chunk(2)])
                `}
          ranges={[
            { loc: [4, 5], title: "that's why we have flatMap" },
            { loc: [5, 6], title: "convert back to tuples" },
            { loc: [0, 6] },
            { loc: [0, 6], title: "The pattern is reusable" },
            { loc: [4, 5], title: "except this..." },
          ]}
        />

        <CodeSlide
          bgColor="code"
          lang="javascript"
          code={
            `// {k: v, ...} → [[f(k): f(v)], ...]
const mapKeyValue =
  f => fp.pipe([
        fp.toPairs,
        fp.flatMap(f),
        fp.chunk(2)])

const encode = mapKeyValue(lib.urlEncode) `}
          ranges={[
            { loc: [0, 6], title: "This is reusable" },
            { loc: [7, 8], title: "...and this is readable" },
            { loc: [2, 3], title: "We didn't remove all the points" },
          ]}
        />

        <Slide><Heading >We're done!</Heading></Slide>

        <CodeSlide
          bgColor="code"
          lang="javascript"
          code={
            `// {a: 1, b: null} → {a: 1}
const removeMissing =
        pickBy(negate(isNil))

// f → {k: v, ...} → [[f(k), f(v)], ...]
const mapKeyValue =
        f => pipe([
                toPairs,
                flatMap(f),
                chunk(2)])

// Object → String
const querystringify = pipe([
  removeMissing,
  mapKeyValue(lib.urlEncode),
  join("="),
  join("&")
])
             ` }
          ranges={[
            { loc: [0, 17] },
            { loc: [0, 3] },
            { loc: [4, 10] },
            { loc: [11, 18] },
            { loc: [1, 10], title: "All Library Code" },
            { loc: [11, 18], title: "Business Code is 1 Function" },
          ]}
        />
          <Slide
            bgImage={images.more}
            bgDarken={0.3}
            >
          </Slide>

        <Slide>
          <Heading>More fp!</Heading>
        </Slide>

        <Slide bgColor="code">
          <Heading>fp.cond</Heading>
          <CodePane
            lang="js"
            theme="external"
            textSize="1em"
            textSize="0.9em"
            source={`
  fp.cond([
    [predicateFunction, appliedWhenTrue],
    [(x => x < 0),      (x) => log(x, "is bad")],
    [fp.equals(0),      someOtherFunction ],
    [fp.T,              thisIsTheDefaultFunction ]
  ])
                      `}
          />
        </Slide>

        <Slide>
          <Heading fit>Works like <code>switch</code></Heading>
          <Text>...but it returns</Text>
        </Slide>

        <Slide bgColor="code">
          <Heading fit>I've seen this a time or two</Heading>
          <CodePane
            lang="js"
            theme="external"
            textSize="0.8em"
            source={`
const isAction = fp.isEqual

const incrementCount = (action, state) => state + 1

export default = fp.cond([
  [isAction("CLICK_UP"),   incrementCount],
  [isAction("CLICK_DOWN"), decrementCount],
  [fp.T,                   previousState ]
])
                        `}
          />
        </Slide>


        <Slide bgColor="code">
          <Heading fit>Pointfree Average</Heading>
          <CodePane
            lang="js"
            theme="external"
            textSize="1em"
            margin="1em 0"
            source={
              `// [Number] → Number
const average = fp.compose(
                  fp.spread(fp.divide),
                  fp.over([fp.sum, fp.size]))

average([1,2]) // 1.5 `}
          />
        </Slide>

        <Slide>
          <Heading><code>fp.over</code></Heading>
          <Text margin="1em 0">
            Apply a value over an array of functions</Text>
          <CodePane
            lang="js"
            theme="light"
            textSize="1em"
            source={`
  // [(a→x), (b→y), ...] → a → [x,y]

  fp.over([fp.sum, fp.size]) ([10, 5])
  // [15, 2]
                      `}
          />
        </Slide>

        <Slide>
          <Heading><code>fp.spread</code></Heading>
          <Text margin="1em 0">
            Apply an array to a function that takes multiple parameters
                    </Text>
          <CodePane
            lang="js"
            theme="light"
            textSize="1em"
            source={`
  // (x,y,z,... → A) → [x,y,z,...] → A

  fp.divide(15,2) // 7.5
  fp.spread(fp.divide)([15,2]) // 7.5
                      `}
          />
        </Slide>

        <Slide bgColor="code">
          <Heading fit>Pointfree Average</Heading>
          <CodePane
            lang="js"
            theme="external"
            textSize="1em"
            margin="1em 0"
            source={
              `// [Number] → Number
const average = fp.compose(
                  fp.spread(fp.divide),
                  fp.over([fp.sum, fp.size]))

average([1,2]) // 1.5
                      `}
          />
        </Slide>

        <Slide>
          <Heading fit>RTM</Heading>
          <Text>Aliases, variadic replacements, rearranged arguments, oh my</Text>
        </Slide>

        <Slide>
          <Heading>Eventually</Heading>
          <Image src={images.distracted} />
        </Slide>

        <Slide bgImage={require("../assets/ramda.png")}>
        </Slide>

        <Slide>
          <Heading>Why?</Heading>
        </Slide>

        <Slide bgColor="code">
          <Heading fit>Useful Standard Libary</Heading>
          <CodePane
            lang="js"
            theme="external"
            textSize="1em"
            margin="1em 0"
            source={`
  // same as fp.apply + fp.spread from earlier
  R.converge(R.divide, [R.length, R.always(2)]) 
              `}
          />
        </Slide>

        <Slide bgImage={images.maz} bgDarken={0.4}>
          <Heading fit textColor="primary">Lenses</Heading>
          <Text textColor="white">Focus operations on parts of a data structure.</Text>
        </Slide>

        <CodeSlide
          bgColor="code"
          lang="javascript"
          textSize="0.8em"
          code={require("./sourceExamples/advent.of.code.js.txt")}
          ranges={[
            { loc: [0, 18], title:"Advent of Code" },
            { loc: [12, 18] },
            { loc: [13, 14] },
            { loc: [15, 16] },
            { loc: [16, 17] },
            { loc: [12, 18] },
          ]}
          />

        <CodeSlide
          bgColor="code"
          lang="javascript"
          textSize="0.8em"
          code={require("./sourceExamples/advent.of.code.someoneelse.js.txt")}
          ranges={[
            { loc: [0, 0], title: "High ★ version from Github"},
            { loc: [0,9], title: "Huh?"},
          ]}
          />

        <CodeSlide
          bgColor="code"
          lang="scala"
          textSize="0.6em"
          code={require("./sourceExamples/encoder.scala.txt")}
          ranges={[
            { loc: [0, 24], title: "String Encoder"},
            { loc: [22, 23] },
          ]}
          />

        <Slide>
          <Heading fit>Sounds great!</Heading>
        </Slide>

        <Slide bgImage={require("../assets/skeptical.gif")}>
          <Heading fit>What's the catch?</Heading>
        </Slide>

        <Slide bgColor="code">
          <Heading fit>What is this?</Heading>
          <CodePane
            lang="js"
            theme="dark"
            textSize="1em"
            margin="1em 0"
            source={`
    const foo = fp.getOr('name')
            `}
            />
        </Slide>

        <Slide bgColor="code">
          <Heading fit>What is this?</Heading>
          <CodePane
            lang="js"
            theme="dark"
            textSize="1em"
            margin="1em 0"
            source={`
    // default → {name: v} → v | default
    const foo = fp.getOr('name')
            `}
            />
        </Slide>

        <Slide bgImage={require("../assets/noidea.gif")} bgDarken={0.5}>
          <Heading fit>Typescript Support</Heading>
          <Text textSize="3em" margin="1em 0" textColor="primary" bold>¯\_(ツ)_/¯</Text>
        </Slide>

        <Slide bgColor="code">
          <Heading>Debugging</Heading>
          <Text textColor="primary">There is no where to place a breakpoint.</Text>
          <CodePane
            lang="js"
            theme="dark"
            textSize="1em"
            margin="1em 0"
            source={`
    const querystringify = pipe([
      removeMissing,
      mapKeyValue(lib.urlEncode),
      join("="),
      join("&")
    ])
            `}
            />
        </Slide>

        <Slide bgColor="code">
          <Heading fit>Debugging Fixed</Heading>
          <Text textColor="primary">Invoke the debugger directly</Text>
          <CodePane
            lang="js"
            theme="dark"
            textSize="1em"
            margin="1em 0"
            source={`
    const querystringify = pipe([
      removeMissing,
      fp.tap(debugger), // eslint-disable-line
      mapKeyValue(lib.urlEncode),
      join("="),
      join("&")
    ])
            `}
            />
        </Slide>

        <Slide>
          <Heading fit>When not to use it</Heading>
          <Text>Whenever it doesn't make sense.</Text>
        </Slide>

        <Slide>
          <Heading fit italic>TL;DR;</Heading>
          <Appear>
            <Text>Favor&nbsp;
              <span style={{background: "#bada55"}}>functional composition</span> over&nbsp;
              <span style={{background: "#f66"}}>chaining</span> to give meaningful names to your transformations.
            </Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading fit italic>TL;DR;</Heading>
          <Text>
            Break&nbsp;
            <span style={{background: '#f66'}}>larger functions</span> into&nbsp;
            <span style={{background: '#bada55'}}>smaller</span>, &nbsp;
            <span style={{background: '#bada55'}}>composible</span> functions with&nbsp;
            <span style={{background: '#bada55'}}>meaningful&nbsp;names</span>.
          </Text>
        </Slide>

        <Slide>
          <Heading>Basically...</Heading>
        </Slide>

        <Slide bgColor="code">
          <Heading >Don't write this</Heading>
          <CodePane
            lang="js"
            theme="external"
            textSize="1em"
            margin="1em 0"
            source={require("./sourceExamples/badExample.js.txt")}
        />
        </Slide>

        <Slide bgColor="code">
          <Heading >Write this</Heading>
          <CodePane
            lang="js"
            theme="dark"
            textSize="1em"
            margin="1em 0"
            source={`
    // Object → String
    const querystringify = pipe([
      removeMissing,
      mapKeyValue(lib.urlEncode),
      join("="),
      join("&")
    ])
`}
          />
        </Slide>


        <Slide><Heading fit>Questions?</Heading></Slide>

      </Deck>
    );
  }
}
