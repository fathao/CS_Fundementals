// simple class + extends
class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say(input) {
    console.log(this.name + ': "' + input + '"');
  }

  growOld() {
    this.age++;
  }
}

// in effects, but not really like this
class Programmer {
  constructor(name, age, language) {
    super(name, age);
    this.language = language;
    this.say('yoyo');
  }

  super(name, age) {
    this.name = name;
    this.age = age;
  }

  say(input) {
    console.log(this.name + ': "' + input + '"');
  }

  growOld() {
    this.age++;
  }
}

// is-a relationship, Programmer is a Person
class Programmer extends Person {
  constructor(name, age, language) {
    super(name, age);
    this.language = language;
    this.say('yoyo');
    
  }
}

const person = new Person('Scott', 18);
person.say('Yoyoyo'); // 'Scott: "Yoyoyo"'
person.growOld(); // person.age => 19
console.log(person.age);

new Programmer('Scott', 18, 'java');

// functionally create a class es5
function PersonF(name, age) {
  this.name = name;
  this.age = age;
}

PersonF.prototype.say = function(input) {
  console.log(this.name + ': "' + input + '"');
};

PersonF.prototype.growOld = function() {
  this.age++;
};

// array implemented
class ArrayCustom {
  constructor() {
    this.storage = []; // memory structure
    this.lastIndex = 0;
  }
  append(element) {
    this.storage[this.lastIndex] = element;
    this.lastIndex++;
  }
  prepend(element) {
    for (var i = this.storage.length - 1; i >= 0; i++) {
      this.storage[i + 1] = this.storage[i];
    }
    this.storage[0] = element;
  }
}

var a = new ArrayCustom(); // var a = new Array();
a.append('b');


