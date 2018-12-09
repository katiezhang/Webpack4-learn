import {A} from "./A";

class B extends A {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  getAge() {
    return this.age;
  }

  getName(){
      return super.getName();
  }

  getNo(){
    return super.no;
  }
}

export {B};