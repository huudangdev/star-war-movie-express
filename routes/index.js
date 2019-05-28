var moviesJSON = require("../movies.json");

//home
exports.home = (req, res) => {

    var movies = moviesJSON.movies;

    res.render('home', {
        title : "Start War Movies",
        movies : movies,
    });
};

//routes
//season.number
exports.movies_single = (req, res) => {
    var id_season = req.params.id;

    var movies = moviesJSON.movies;

    if (id_season >= 1 && id_season <=6) {
        var movie = movies[id_season - 1];
    
        var title = movie.title;

        var main_characters = movie.main_characters;

        res.render('movie_single', {
            movies : movies,
            title : title,
            movie : movie,
            main_characters : main_characters,
        });
    } else {
        res.render('notFound', {
            movies : movies,
            title : "This is not the page you are looking for",
        });
    }

};

//not found
exports.notFound = (req, res) => {
    var movies = moviesJSON.movies;

    res.render('notFound', {
        movies : movies,
        title : "This is not the page you are looking for",
    });
};
