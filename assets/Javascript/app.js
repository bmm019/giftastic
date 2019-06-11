var movies = [];

function renderButtons() {
	$("#buttonsArea").empty(); // empties the buttonsArea div so we don't make duplicates

	// creates a button with attributes for every item in the movie array
	for (var i = 0; i < movies.length; i++) {
		var button = $("<button>");
		button.html(movies[i]);
		button.addClass("btn btn-outline-secondary");
		button.attr("id", "movie-btn");
		button.attr("movie-title", movie[i]);
		$("#buttonsArea").append(button);
	}
}

function displayGifs() {
	var thisMovie = $(this).attr("movie-title");
	console.log(thisShow);
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thisMovie + "&api_key=bqJ3go8PvKA8wPJCNd6bNxq8psAwVAol";

	// ajax call that gets and returns the response object from the query url
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		console.log(response);
		var response = response.data;