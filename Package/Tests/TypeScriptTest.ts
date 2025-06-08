import RawConfig from "eslint-plugin-react/lib/rules/jsx-no-literals";


let bla: RawConfig;

const a: string = "FOO"

class Test {


  get bla(): void {
    console.log();
  }

}


const bla: bigint = 1243;

setTimeout((): void => {}, 1000);

let test: BufferEncoding | undefined;


async function asyncFunction(): Promise<void> {
  return new Promise<void>((resolve: () => void): void => {
    setTimeout(resolve, 1000);
  });
}


class TestClass {

  public static async test(): Promise<void> {
    return asyncFunction();
  }

}


let aaaa: boolean | undefined;

if (aaaa) {

}
