// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(pelicula => pelicula.director);
  console.log("EXERCICE 1 - DIRECTORS ->", result);
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
  let result = sumaScore / arrayDirector.length;
  //let patata = parseFloat(result.toFixed(2));
  return parseFloat(result.toFixed(2));

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let listaPeliculas = array.map(pelicula => pelicula.title).sort();
  let selectionMovies = listaPeliculas.slice(0,20);
  console.log ("EXERCICE 4 - ORDER ALPHABETICALLY ->", selectionMovies);
  return selectionMovies;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let result = movies.sort(compare);
  //let result = movies.sort((a,b) => a.year == b.year ? a.title > b.title ? 1 : -1 : a.year > b.year ? 1 : -1);
  let final = [...result];
  console.log("EXERCICE 5 - ORDER BY YEARS ->", final);
  return final;
}
function compare (a,b){
  if(a.year > b.year){
    return 1;
  }
  else if (a.year < b.year){
    return -1;
  }
  else{

    if(a.title > b.title){
      return 1;
    }

    else{
      return -1;
    }

  }
  return 0;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array,categoria) {
  let arrayCategoria = array.filter(pelicula => pelicula.genre.includes(categoria));
  let moviesAverage = arrayCategoria.filter(pelicula => pelicula.score).length;
  //let sum = arrayCategoria.reduce((acu, pelicula) => acu + pelicula.score,0).length;
    //let sum = arrayCategoria.reduce((a,b) => b.score != null ? a + b.score: a + 0,0);
  let result = arrayCategoria.reduce((a,b) => a + b.score,0);
  let final = result / moviesAverage;
  console.log ("EXERCICE 6 - AVERAGE FROM CATEGORIES ->", final);
  return parseFloat (final.toFixed(2));
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  /*
  let result = array.map(pelicula => pelicula.duration = textoAminutos(pelicula.duration));
  console.log ("EXERCICE 7 - TRANSFORM DURATION MOVIES IN MINUTES ->", result);
  return result;
  */


  
  let result = array.map(pelicula => pelicula.duration = textoAminutos(pelicula.duration));
  final = array.slice();
  console.log ("EXERCICE 7 - TRANSFORM DURATION MOVIES IN MINUTES ->", final)
  return final;
  
}

function textoAminutos (array){
  let contador = array.split(" "); //["2h", "14min"] la separacion
    if(contador.length == 1){
     if(contador[0].indexOf("h">= 0)){
         minutos = parseInt(contador[0].replace("h","")*60);
      }
    
      else if(!contador[0].indexOf("m">= 0)){
        minutos = parseInt(contador[0].replace("","min"));
      }
        else{
        minutos = parseInt(contador[0].replace("min",""));
        }
      }
      
      else{
      minutos = parseInt(contador[0].replace("h","")*60);
      minutos += parseInt(contador[1].replace("min",""));

    }

return minutos;
}



// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let result = array.filter(pelicula => pelicula.year);
  let resultYears = result.sort((a,b) => a.score > b.score ? 1 : a.score > b.score ? -1 : -1);
  //let mejorPelicula = [...result];
  let mejorPelicula = resultYears.slice(result.length -1);
  console.log ("EXERCICE 8 - GET THE BEST FILM ->", mejorPelicula);
  return mejorPelicula;


  //let result = array.map(pelicula => pelicula.score);
  //let mejorPelicula = [...result];
  //console.log ("EXERCICE 8 - GET THE BEST FILM  ->", mejorPelicula);
  //return mejorPelicula;


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
