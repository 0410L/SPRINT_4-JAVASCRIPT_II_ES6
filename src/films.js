// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  console.log("EXERCICE 1 - DIRECTORS ->", array);
  let result = array.map(pelicula => pelicula.director);
  // console.log("EXERCICE 1 DIRECTORS ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((pelicula) => pelicula.director == director);
  console.log("EXERCICE 2 - FILMS OF DIRECTOR ->", result);
  return result;
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let arrayDirector = array.filter((pelicula) => pelicula.director == director ?? pelicula.score);  //?? condicion if
  let sumaScore = arrayDirector.reduce((acu, pelicula) => acu + pelicula.score,0);
  let AverageOfDirector = sumaScore / arrayDirector.length;
  //let patata = parseFloat(AverageOfDirector.toFixed(2));
 // console.log("EXERCICE 3 ->", patata);
  return parseFloat(AverageOfDirector.toFixed(2));

}

// Exercise 4:  Alphabetic order by title  // ordenar todas las peliculas y mostrar las primeras 20 peliculas
function orderAlphabetically(array) {
  //console.log ("EXERCICE 4 ->",array);
  // let listaPeliculas = array.sort (array.title);
  let listaPeliculas = array.sort((a, b) => a.title.localeCompare(b.title));
  let selectionMovies = listaPeliculas.slice(0,20);
  console.log ("EXERCICE 4 ->", selectionMovies);
return selectionMovies;
}

// Exercise 5: Order by year, ascending
function orderByYear() {
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
