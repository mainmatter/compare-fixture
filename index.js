import walkSync from 'walk-sync';
import { readFileSync } from 'fs';
import { join } from 'path';

import { generateDiff } from 'mocha-diff';

const fixtureDir = process.argv[2];
const comparisonDir = process.argv[3];

if (!fixtureDir) {
  console.error('You need to provide the path to a fixture and to the comparison dir');
  process.exit(1);
}

if (!comparisonDir) {
  console.error('You need to provide the path to the comparison dir');
  process.exit(1);
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
  console.log('Differences were found in the fixture files!');
  process.exit(1);
}
