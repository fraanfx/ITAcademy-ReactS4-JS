// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  
  let result = array.map((film) => {  return film.director; });
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let directors = array.filter((film) =>  film.director == director);
    console.log(`Peliculas dirigidas por ${director}`)
    console.log(directors)
    return directors;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
   const moviesFromDirector = (array.filter((film) =>  film.director == director));
   let averageDirector = (moviesFromDirector.map(movie => { return movie.score}).reduce((x,y) => x+y, 0)/ moviesFromDirector.length);
   console.log(averageDirector)
    return averageDirector;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
   let order =  array.map((film) => { return film.title});
   console.log(order)
   let sorted = order.sort().slice(0,20)
   return sorted;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const ordenar = array.map(elem => elem).sort((a,b) => (a.year > b.year) ? 1 : -1);
  console.log(ordenar)
  return ordenar;
}
// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array,category) {
  //Agrupar categoria ==>
  const groupByCategory = array.filter( film =>{ if(film.genre == category){ return film }})
  let count = 0;
  //Convertit
  const average = groupByCategory.map(arr => (arr.score == '') ? count++ : arr.score).reduce((a,b) => a+b, 0)/(groupByCategory.length-count);
  return average
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  console.log("Init ex7")
    const hoursToMinutes = array.map((movie) => { //iteramos todo el array y definos cada objeto como pelicula
      
      const spliting = movie.duration.includes(' ') //Si la duración de la peli incluye un espacio en blanco..
      ? movie.duration.split(' ') //Cortamos por allí en casi de que incluya h y m
      :[movie.duration]; //Devolvemos un array con toda la duration

      let movieObj;
    
      const [hours, minutes] = spliting; //Separamos horas y minutos.
      console.log(`esto es  h ${hours} min ${minutes} `)
      const hourToMinutes = Math.round(hours.match(/\d/g)) * 60; //filtramos los números /d == filtrar numeros, /g todos
      
      const minutesClean = Math.round(minutes?.match(/\d/g).join(''))|| 0; //si solo dura horas devolvemos 0min
      const allInMinutes = hourToMinutes + minutesClean; //SUmamos horas y minutos
      movieObj = { duration: allInMinutes }; //Creamos nuevo objeto con la nueva prop
      
      return {...movie, ...movieObj}; //Devolvemos Obj + movieObj(Duracion añadida) devolver todo con spread
    
    });
    console.log(hoursToMinutes)
    return hoursToMinutes;
  }

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const arr = []
  const getFilm = array.filter(arr => arr.year == year)
  const bestScore = getFilm.map(a => a).reduce(function (a,b) {
        // if(a.score > b.score){
        //   return a 
        // }
        // return b
        return a.score > b.score ? a:b
        
  })
  const bestFilm = getFilm.filter((arr) => {return arr == bestScore})
  return bestFilm;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
