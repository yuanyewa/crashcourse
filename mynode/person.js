console.log(__dirname, __filename);
const person = {
  name: "Jone",
  age: 30
};
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`My name is ${this.name} and I'm ${this.age} years old`);
  }
}
module.exports = Person;