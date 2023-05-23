/*
  Purpose of main file is to run test suites
  Below you can see an example how to run specific
  algorithms with multiple test cases. Try
  uncommenting and running it with "npm run start"
*/

import { twoSum } from "./problems/1 - Two Sum/solution-1";
import { TestSuite } from "./utils/test-suite";

new TestSuite(twoSum)
  .withTest({
    testCase: [[2, 7, 11, 15], 9],
    expectedResult: [0, 1],
  })
  .withTest({
    testCase: [[3, 2, 4], 6],
    expectedResult: [1, 2],
  })
  .execute();
