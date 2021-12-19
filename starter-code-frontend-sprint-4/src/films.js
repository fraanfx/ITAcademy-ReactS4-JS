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
//   console.log("INIT EX 7")
//   //console.log(array)
//     //let convertHours = Math.floor(hours*60);
    
//     //const getFilm = array.filter(arr => arr.duration == '1h 28m')
//     //Devolver array duración
//     const getHour = array.map(arr => arr.duration)
//     console.log(getHour)
//     console.log('ejecuta')
//     let duration = '6h 20m'
//     //const modifyTimes = getHour.map(arr =>  arr.duration.split(' '))
//     //Pasar horas y minutos
//     let [hour, minutes] = duration.map(time => time.split(' '));
//     let [hour, minutes] = getHour.map(time => time.split(' '));
//     //const allMin = ((hour.slice(0, -1))*60)+(minutes.slice(0, -1)*1)

//       (time.length-1 >= 3) ? return minutes : (return hoursToMinutes, minutes)

//     console.log(hour+'<>'+minutes)
//    // console.log(allMin)
    
//     console.log("FIN EX 7")
//     return(allMin)
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
