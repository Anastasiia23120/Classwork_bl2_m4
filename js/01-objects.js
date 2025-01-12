const film = {
  title: 'Harry Potter',
  description: 'Lorem ipsum dolor sit amet.',
  rating: 10,
  actors: ['Janie Gibbs', 'Rosalie Jensen', 'Carolyn Matthews'],
  isAdult: false,
  translations: {
    ua: 'https://ua',
    en: 'https://en',
  },
};

console.log(film);

console.log(film.title);
console.log(film.description);
console.log(film.rating);

console.log(film['rating']);
console.log(film['actors']);

console.log(film['ra' + 'ting']);

const key = 'isAdult';

console.log(film.key);
console.log(film[key]);

film.isAdult = true;
film.test = 100;

console.log(film.isAdult);

console.log(film.actors[1]);

film.actors[1] = 'Alexander Lawson';
film.actors.push('Alexander Lawson');

console.log(film);

console.log(film.translations.en);
