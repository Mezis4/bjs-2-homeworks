function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student("Vasya", "male", 33);
let student2 = new Student("Mariya", "female", 29);
let student3 = new Student("Roman", "male", 19);
let student4 = new Student("Anastasiya", "female", 23);

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
  if (this.marks !== undefined) {
    this.marks.push(...marksToAdd);
  }
}

Student.prototype.getAverage = function() {
  let avg = 0;
  if (this.marks !== undefined && this.marks[0]) {
    avg = this.marks.reduce((acc, mark) => {
      return acc += mark;
    }, 0) / this.marks.length;
  }
  return avg;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
