// import axios here
const axios = require('axios');



// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464'

const discoverMovie = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // code here

  const response = await axios.get(url)

  return response;
  
  // axios.get(url).then(response => {

  //   console.log('response', response.data)

  //   return response;

  // });


}

const getMovieById = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  // code here


  const response = await axios.get(url);

    console.log('Response:', response.data);

    return response.data;


  // axios.get(url).then(response => {

  //   console.log('Response', response.data)

  //   return response.data

  // })


  // Don't know why the commented out code doesn't work but the async and await version does?
  

}

const getMovieByIdFailure = () => {
  const fakeId = 5783 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here

  return axios(url).then(response => {

    return response.status

  }).catch(error => {


    return error.response.status})
    







}

// discoverMovie();

// getMovieById(500)

getMovieByIdFailure();

module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}