interface ITest<Test, Result> {
  testCase: Test;
  expectedResult: Result;
}

export class TestSuite<Args extends Array<unknown>, Result> {
  private tests: Map<Args, Result> = new Map();

  constructor(private algorithm: (...args: Args) => Result) {}

  public withTest({ testCase, expectedResult }: ITest<Args, Result>): this {
    this.tests.set(testCase, expectedResult);

    return this;
  }

  private printResult(testCase: Args, result: Result): void {
    const expectedResult = this.tests.get(testCase);
    const symbol = expectedResult === result ? "✓" : "✘";
    const algorithmName = this.algorithm.name;
    const args = JSON.stringify(testCase).slice(1, -1);

    console.clear();
    console.log(
      `${symbol} - ${algorithmName}(${args}) => ${JSON.stringify(result)}`
    );

    if (expectedResult == result) {
      return;
    }
    console.log(`⚠ - Expected result is: ${JSON.stringify(expectedResult)}`);
  }

  public execute(): void {
    this.tests.forEach((expectedResult: Result, testCase: Args): void => {
      const result = this.algorithm(...testCase);

      this.printResult(testCase, result);
    });
  }
}
