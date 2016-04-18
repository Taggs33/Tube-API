$(document).ready(function() {

	$('#search-term').submit(function(event){
    	event.preventDefault();
    	var searchTerm = $('#query').val();
    	getRequest(searchTerm);
    });

  });

function getRequest(searchTerm){
  var params = {
    q: searchTerm,
    part: 'snippet',
    key: 'AIzaSyDc7e4wgD6XFevLNe8c9Vhqxai-GGpbnas'
  };

  url = 'https://www.googleapis.com/youtube/v3/search';


  $.getJSON(url, params, function(data){
  	// console.log(data);
  	// console.log(data.Search);
    showResults(data.items);
  });
}

function showResults(Items){
  // console.log(Items);
  var videos = "";

  $.each(Items, function(index,value){
    // console.log(value.snippet.title);
    // console.log(value.snippet);
    console.log(value);
    var link = "https://www.youtube.com/watch?v=" + value.id.videoId;
    var pic = value.snippet.thumbnails.default.url;

    videos += '<p>' + value.snippet.title + '</p>';
    videos += '<a target="_blank" href="' + link + '">Click Here</a>';
    videos += '<br>';
    videos += '<img src="' + pic + '">';
    // <a href="https://www.youtube.com/watch?v=Wji-BZ0oCwg">Click Here</a>
    // console.log(videos);
  });

  $('#search-results').html(videos);
}		

// Wji-BZ0oCwg
// https://www.youtube.com/watch?v=Wji-BZ0oCwg
// var myData = data.Search;
// $.each(myData, function(index, value) {
// http://www.omdbapi.com?s=star%20wars&r=json