// Задание 1 "Печатное издание"
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state =  100;
    } else {
      this._state = value;  
    }
  }

  get state() {
    return this._state;
  }

  fix() {
    this.state *= 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Задание 2 "Библиотека"
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (this.state <= 30) {
      return;
    } else {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.find(item => item[type] === value) ?? null;
  }

  giveBookByName(bookName) {
    const bookIndex = this.books.findIndex((item) => item.name === bookName);
    let searchResult = null;
    if (bookIndex < 0) {
      return searchResult;
    } else {
      searchResult = this.books[bookIndex];
      this.books.splice(bookIndex, 1);
    }
    return searchResult;
  }
}

// Задание 3 "Журнал успеваемости"

class Student {
  constructor(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 1 || mark > 5) {
      return;
    }

    if (!this.marks.hasOwnProperty(subject)) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    const subjectMarks = this.marks[subject];
    if (!subjectMarks) {
      return 0;
    }

    return subjectMarks.reduce((acc, mark) => {
      return acc += mark;
    }, 0) / subjectMarks.length;
  }

  getAverage() {
    const allSubjects = Object.keys(this.marks);
    const subjectLength = allSubjects.length;
    let summary = 0;
    if (subjectLength === 0) {
      return 0;
    }

    allSubjects.forEach((subject) => {
      summary += this.getAverageBySubject(subject);
    });
      
    return summary / subjectLength;
  }

  exclude (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
}
