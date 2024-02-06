# compare-fixture

This is a super simple tool to compare two folders. It is intended to be used to test build systems where you have a known expected output (a fixture) that you want to compare a build process against. 

## Installation

You can use this tool from the command line directly with npx and not install it as follows: 

```
npx compare-fixture
```

or you can install it locally to make sure that you don't need to install it before use: 

```
npm i --save-dev compare-fixture
```

## Usage

This tool was initially created to be a simple command line comparison between folders. You can also import it to use in your tests directly.

### Command Line

```
npx compare-fixture <fixture folder> <comaprison folder>
```

This will test each file in `<fixture folder>` against each corresponding file in the `<comparison folder>` 

**Note:** if any extra files exist in `<comparison folder>` that is **not considered an error**. This allows you to easily test a sub-section of your files with a sparse fixture. On the other hand, if a file exists in the fixture but is missing in the comparison folder then that is considered an error.

### Node

```js
import { makeAmazingStuff } from '../my-library';
import compareFixture from 'compare-fixture';

describe("amazing fixtures", function() {
  it("can save the world", async function() {
    await makeAmazingStuff

    compareFixture('./test/fixtures/expected-stuff', './output');
  })
})
```

The semantics and the console output is the same as the CLI version

## Example output

```
thing.js is different in the fixture 🚨

+ expected - actual

  function aVeryNiceTestFunction() {
-  console.log('I really should impolement something here');
-  console.log('I really should impolement something here');
-  console.log('I really should impolement something here');
-  console.log('I really should impolement something here');
-  console.log('I really should impolement something here');
+  console.log('I really should implement something here');
+  console.log('I really should implement something here');
  }
  
  function badlyIndented() {
    let items = [
      'one',
-      'two',
+    'two',
      'three',
-  'four',
-    'five'
+    'four',
+    'five',
    ];
  }
-
-function possiblyMissing() {
-  console.log('a very important function');
-}
```

And if your terminal supports colours it will output the diff with colours: 

<img width="715" alt="Screenshot 2023-03-19 at 16 25 18" src="https://user-images.githubusercontent.com/594890/226189889-3151b7fb-dbf6-4889-8b22-46b58dea26d6.png">

