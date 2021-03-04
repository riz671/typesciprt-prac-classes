interface Named {
  name: string;
}

// The greetable interface inherits the property blueprint of Named
interface Greetable extends Named {
  // the question mark after age means age parameter will be optional to put
  age?: number;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase);
  }
}

let user: Greetable;

user = new Person("Riz");
console.log(user);

// user = {
//   name: "Rizwan",
//   age: 24,
//   isMale: true,
//   hobbies: ["Origami", "Programming"],
//   greet(phrase) {
//     return phrase;
//   },
// };

// console.log(user.greet("Hey"));
