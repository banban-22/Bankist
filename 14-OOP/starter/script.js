'use strict';
/*
///////////////////////////////////////////////
const Person = function (firstName, birthYear) {
  //   console.log(this);
  //   Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   //   Never Do This
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// Portotype
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array ===[]
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.log(h1);
console.dir(x => x + 1);

///////////////////////////////////////////
// Coding Challenge #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed}km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed}km/h`);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();
car1.accelerate();
///////////////////////////////////////////////
*/

/*
///////////////////////////////////////////////
// class expression
// const PersonCl = class{}

// class declaration
class PersonCl {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
  //   Methods will be added to .prototype prpperty
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.name}`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.name}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode
///////////////////////////////////////////////
*/

/*
///////////////////////////////////////////////

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //   Instant method
  //   Methods will be added to .prototype prpperty
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //   Set a property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //   Static method
  static hey = function () {
    console.log('Hey there 👋');
    console.log(this); //This does not work
  };
}
PersonCl.hey();
const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);

const walter = new PersonCl('Walter White', 1965);
console.log(walter.fullName);

const Person = function (firstName, birthYear) {
  //   console.log(this);
  //   Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   //   Never Do This
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};
Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this); //This does not work
};
Person.hey();
///////////////////////////////////////////////
*/

/*
///////////////////////////////////////////////

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
///////////////////////////////////////////////
*/

/*
///////////////////////////////////////////////

// Coding Challenge #2
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
    // console.log(`${this._speed} going at ${this._speed} mi/h`);
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
    // if (this.speed === this.speed / 1.6) this.speed * 1.6;
    // console.log(`${this.speed} going at ${this.speed} mi/h`);
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();

ford.speedUS = 50;

console.log(ford);
///////////////////////////////////////////////
*/

/*
///////////////////////////////////////////////

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking Prototypes
Student.prototype = Object.create(Person.prototype);
// The student.prototype object is now an object that inherits from Person.prototype
//We have to create this connection here before we add any more methods to the prototype object of Student
// because object.create will return an empty object
// so, at this time, Student.prototype is empty

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
///////////////////////////////////////////////
*/

/*
///////////////////////////////////////////////
// Coding Challenge #3

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed}km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed}km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
tesla.accelerate();
tesla.brake();
tesla.accelerate();
///////////////////////////////////////////////
*/

/*
///////////////////////////////////////////////
// Inheritance Between "Classes": ES6
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //   Instant method
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //   Set a property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //   Static method
  static hey = function () {
    console.log('Hey there 👋');
  };
}

class studentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.coures}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      }years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }.`
    );
  }
}
const martha = new studentCl('Martha Jones', 2012, 'Computer Science ');
martha.introduce();
martha.calcAge();
*/

/*
///////////////////////////////////////////////
// Inheritance Between "Classes": Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

/*
///////////////////////////////////////////////
// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// (There are also the static versions)

class Account {
  //   1. Public fields (instances)
  locale = navigator.language;

  //   2.Private fields(intstances NOT on the protortype)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //   3) Public methods
  //   Public interface
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this; // To make the method chainable
  }
  withdraw(val) {
    this.deposit(-val);
    return this; // To make the method chainable
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this; // To make the method chainable
    }
  }
  // 4) Private methods
  //   #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1._movements.push(250)
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(100);
acc1._approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/

// Coding Challenge #4

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerrate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}
*/
const rivian = new EVCl('Rivian', 120, 23);

console.log(rivian);
rivian.accelerate().brake().accelerate().accelerate().brake().chargeBattery(50);
console.log(rivian.speedUS);
