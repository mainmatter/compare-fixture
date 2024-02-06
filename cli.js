#!/usr/bin/env node

import compareFixture from "./index.js";

const fixtureDir = process.argv[2];
const comparisonDir = process.argv[3];

try{
  compareFixture(fixtureDir, comparisonDir);
} catch (err) {
  console.error(err);
  process.exit(1);
}
