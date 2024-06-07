//import modules
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const fs = require('fs');

//create express app
const app=express();
const PORT=3000; //LOCALHOST:3000
app.use(bodyParser.json());
app.use(cors());

//read data from file
let movies = require('./movies.json');

//get all movies from route /api/movies
app.get('/api/movies',(req,res)=>{
    res.json(movies); // returns all movies in json format
});

// get movies from route /api/movies/search?title={title}
app.get('/api/movies/search',(req,res)=>{
    const title = req.query.title;  // gets title from query/url
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase())); // filters movies based on title
    res.json(filteredMovies); // returns filtered movies in json format
});


//Run the server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});