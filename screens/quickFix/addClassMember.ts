class OtherTest {
}
class Test {
  constructor() {
    this.something = 123;
    this.foo = new OtherTest();
    this.foo.something = {
      fancy: 123,
      fancier: 'hello world'
    }
  }
}
