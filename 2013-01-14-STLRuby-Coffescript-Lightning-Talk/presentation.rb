#!/usr/bin/env ruby

require 'termnote'

include TermNote

show.add chapter title: "CoffeeScript Arrays",
              subtitle: 'Syntax WAT'

show.add text title: "> whoami", content: """




"""
show.add text title: "> whoami",
            content: """
           MarkBorcherding
           MarkBorcherding@gmail.com
          @MarkBorcherding
github.com/MarkBorcherding
"""

show.add text content: """
  throw new Tomato unless language == 'ruby'
"""

show.add text content: """
  throw new Tomato unless ['ruby', 'coffeescript'].include? language
"""

show.add text content: "Everyone likes Hubot."

show.add text title: "Everyone likes extending Hubot.", content: """
github.com/MarkBorcherding/hubot-script-blitz
"""

show.add text content: "I really want to like CoffeScript."
show.add text content: "I _really_ want to like CoffeScript."
show.add text content: "I really _want_ to like CoffeScript."

show.add text content: "CoffeeScript can be pretty sexy."

show.add code language: "text", source: <<-SOURCE
 describe 'Old lady down the street', ->
   it 'should be a crazy cat lady', ->
     user.pets.should.have.lengthOf 42
SOURCE

show.add code language: "javascript", source: <<-SOURCE
foo( [ 1, 2, 3, 4] );
SOURCE

show.add text content: """
foo [ 1, 2, 3, 4 ]
"""

show.add text content: """
foo [ 1, 2
      3, 4 ]
"""

show.add code language: "javascript", source: <<-SOURCE
foo( [ 1, 2,
       3, 4] );
SOURCE

show.add code language: "javascript", source: <<-SOURCE
foo( [ {a:1}, {a:2},
       {a:3}, {a:4} ] );
SOURCE

show.add text content: """
foo [ a:1, a:2,
      a:3, a:4 ]
"""

show.add code language: "javascript", source: <<-SOURCE
foo([ { a: 1, a: 2 },
      { a: 3, a: 4 }
    ]);
SOURCE

show.add text content: """
foo [ a:1,
      a:2,
      a:3,
      a:4 ]
"""

show.add code language: "javascript", source: <<-SOURCE
foo([
      { a: 1 },
      { a: 2, a: 3, a: 4 }
    ]);
SOURCE

show.add text content: """
foo [
      a:1,
      a:2,
      a:3,
      a:4 ]
"""
show.add code language: "javascript", source: <<-SOURCE
foo([
      { a: 1, a: 2, a: 3, a: 4 }
    ]);
SOURCE

show.add text content: """
foo [
      a:1,
        a:2,
          a:3,
            a:4 ]
"""
show.add code language: "javascript", source: <<-SOURCE
foo([
      {a: 1},
      {a: 2},
      {a: 3},
      {a: 4}
    ]);
SOURCE

show.add text content: """
foo [
      a:1,
        a:2,
      a:3,
        a:4 ]
"""
show.add code language: "javascript", source: <<-SOURCE
foo([
      {a: 1},
      {a: 2},
      {a: 3},
      {a: 4}
    ]);
SOURCE

show.add text content: """
foo [
      a:1,
      b:'b',
        a:2,
        b:'b',
      a:3,
      b:'b',
        a:4
        b:'b']
"""
show.add code language: "javascript", source: <<-SOURCE
foo([
      {a: 1, b: 'b'},
      {a: 2, b: 'b'},
      {a: 3, b: 'b'},
      {a: 4, b: 'b'}
    ]);
SOURCE

show.add chapter title: 'Chaining'

show.add code language: "javascript", source: <<-SOURCE
foo('a').bar('b').baz('c')
SOURCE

show.add text content: """
foo('a').bar('b').baz 'c'
"""
show.add chapter title: 'Passing Multiple Function'

show.add code language: "javascript", source: <<-SOURCE
foo( 'a',
     function(){bar('b');},
     function(){baz('c');});
SOURCE

show.add text content: """
foo 'a',
  -> bar 'b'
  -> baz 'c'
"""
show.add code language: "javascript", source: <<-SOURCE
foo( function(){bar('b');},
     function(){baz('c');});
SOURCE

show.add text content: """
# Doesn't work

foo -> bar 'b'
  -> baz 'c'

"""
show.add text content: """
b = -> bar 'b'
c = -> baz 'c'
foo b,c
"""

show.start
