const library = new Library("Библиотека имени Ленина");
const secondLife = new NovelBook("Фредерик Бакман", "Вторя жизнь Уве", 2012, 384);
const moonAndPenny = new NovelBook("Сомерсет Моэм", "Луна и грош", 1919, 288);

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(moonAndPenny);
library.addBook(secondLife);

console.log(library.findBookBy("name", "Властелин колец")); 
console.log(library.findBookBy("releaseDate", 1924).name);

console.log("Количество книг до выдачи: " + library.books.length);
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length);

library.giveBookByName("Луна и грош");
console.log(moonAndPenny.state);
moonAndPenny.state = 40;
console.log(moonAndPenny.state);
moonAndPenny.fix();
console.log(moonAndPenny.state);
library.addBook(moonAndPenny);
console.log("Количество книг до выдачи: " + library.books.length);