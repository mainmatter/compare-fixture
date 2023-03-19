import { execaNode } from 'execa';
import { expect } from 'chai';

describe('compare fixture command', function() {
  it('outputs the differences correctly', async function() {
    const { stdout } = await execaNode('./index.js', ['test/fixtures/one', 'test/fixtures/two']);
    expect(stdout).to.equal(`thing.js is different in the fixture 🚨

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
      `);
  })
})
