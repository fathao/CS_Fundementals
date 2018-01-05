function abc() {
  this.a = 5;
}

var obj = {
  abc: function() {
    this.a = 5;
    return 'returned value';
  }
}

obj.abc();

class Obj {
  abc() {
    this.a = 5;
  }
}

const xxx = new Obj();
xxx.abc();


const yyy = new Obj();
yyy.abc();

xxx.kkk()

var obj = new Obj();
obj.abc();


new Programmer('abc', 5, 'java')

// The following are true:
// - yyy is a function, because it has ()
// - xxx is calling yyy()
// - xxx is an instance of AAA, which is a class, that contains a method called yyy
// - in yyy, xxx is this
const xxx = new AAA();
xxx.yyy();

// for example
class AAA {
  yyy() {
    console.log(this.bbb);
  }
}

const xxx = new AAA();
xxx.bbb = 5;
xxx.yyy();
