import walkSync from 'walk-sync';
import { readFileSync } from 'fs';
import { join } from 'path';

import { generateDiff } from 'mocha-diff';

export default function compareFixture(fixtureDir, comparisonDir) {
  if (!fixtureDir) {
    throw new Error('You need to provide the path to a fixture and to the comparison dir');
  }
  
  if (!comparisonDir) {
    throw new Error('You need to provide the path to the comparison dir');
  }
  
  const fixtureFiles = walkSync(fixtureDir, { directories: false });
  
  let foundErrors = false;
  
  fixtureFiles.forEach((file) => {
    const compareFile = readFileSync(join(comparisonDir, file), 'utf8');
    const fixtureFile = readFileSync(join(fixtureDir, file), 'utf8');
  
    if (compareFile != fixtureFile) {
      foundErrors = true;
      console.log(`${file} is different in the fixture 🚨`);
      console.log(generateDiff(compareFile, fixtureFile));
    }
  })
  
  if (foundErrors) {
    throw new Error('Differences were found in the fixture files!');
  }
}
