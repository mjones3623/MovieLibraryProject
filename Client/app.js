// $( document ).ready(function() {
//     console.log( 'ready!' );
//   });
// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//        document.getElementById("movietable").innerHTML = this.responseText;
//       }
//     };
//     xhttp.open("GET", "https://localhost:44325/api/movie/", true);
//     xhttp.send();
//   }

function loadMovies(){
    $.get("https://localhost:44325/api/movie/", function(data){
    	$('#movietable').empty();
    	var parseData = JSON.stringify(data);
    	var parseData = '';
    	$.each(data, function(key,value){
            parseData += '<tbody>';
    		parseData += '<tr>';
    		parseData += '<th scope = "row">' +value.title+ '</td>';
    		parseData += '<td>' +value.genre+ '</td>';
    		parseData += '<td>' +value.director+ '</td>';
    		parseData += '<td><button type="edit">Edit</button></td>';
            parseData += '</tr>';
            parseData += '</tbody>';
    	})
    	$("#movietable").append(parseData);
        console.log(data);
    })
}
//(Get) Get movies for table 
$(function(){
    $.get("https://localhost:44325/api/movie/", function(data){
    	
    	var parseData = JSON.stringify(data);
    	var parseData = '';
    	$.each(data, function(key,value){
            parseData += `<tbody>`;
    		parseData += `<tr>`;
    		parseData += `<th scope = "row">${value.title}</td>`;
    		parseData += `<td>${value.genre}</td>`;
    		parseData += `<td>${value.director}</td>`;
            parseData += `<td>`;
            //parseData += <a href="#" onclick="testOnClickFunction('+value.movieid+');">Edit</a></td>
            parseData += `<button type="button" onclick="editMovie('${value.movieId}', '${value.title}','${value.genre}','${value.director}')">Edit</button>`
            parseData += `</td>`;
            parseData += `</tr>`;
            parseData += `</tbody>`;
    	})
        $("#movietable").append(parseData);
        //document.getElementById("edit-title").innerHTML = value.movieId;
        console.log(data);
    })
});


// $(function getMovieInfoToEdit(id){
// 	//var id = 3;
//     $.get("https://localhost:44325/api/movie/"+id, function(data){
//     	var parseData = '';
//     	var parseData = JSON.stringify(data);
//         $.each(data, function(key,value){
//             parseData += '<form id = "editmovie">';
//     		parseData += '<input type ="text" name="edittitle" value="' +value.title+ '">';
//     		parseData += '<input type ="text" name="edittitle" value="' +value.genre+ '">';
//     		parseData += '<input type ="text" name="edittitle" value="' +value.director+ '">';
//     		parseData += `<button type="button" onclick="editMovie('${value.movieid}', '${value.title}','${value.genre}','${value.director}')">Edit</button>`;
//             parseData += '</form>';
//     	})
//         $("#editmovieplace").append(parseData);
    	
//         console.log(parseData);
//     })
// });

function editMovie(movieid, title, genre, director){
    console.log(`${movieid}, ${title}, ${genre},${director}`);
    //console.log(passedvalue);
    //document.getElementById("edit-title").innerHTML = passedvalue;
}



//(Get) Get single movie  

$(function(){
	var id = 3;
    $.get("https://localhost:44325/api/movie/"+id, function(data){
    	
    	var parseData = '';
    	var parseData = JSON.stringify(data);
    	
    	
        console.log(parseData);
    })
});

//(Post) Create movie & add to database  

(function($){
    function addMovie( e ){
        var dict = {
            Title : this["title"].value,
            Genre : this["genre"].value,
        	Director: this["director"].value
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie/Post',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr , loadDoc){
               // $('#response pre').html( data );
               // loadDoc();
               loadMovies();
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#add-movie').submit( addMovie );
})(jQuery);

//(Delete)  Delete movie from database

// (function($){
//     function processForm( e ){
//     	var id = 3;
        

//         $.ajax({
//             url: 'https://localhost:44325/api/movie/Post',
//             dataType: 'json',
//             type: 'post',
//             contentType: 'application/json',
//             data: JSON.stringify(dict),
//             success: function( data, textStatus, jQxhr ){
//                 $('#response pre').html( data );
//             },
//             error: function( jqXhr, textStatus, errorThrown ){
//                 console.log( errorThrown );
//             }
//         });

//         e.preventDefault();
//     }

//     $('#my-form').submit( processForm );
// })(jQuery);


// $(document).ready(function(){
//     $.getJSON("https://localhost:44325/api/movie/", function(data){
//         var movie_data = '';
//         $.ajax({
//             url: 'https://localhost:44325/api/movie/',
//             dataType: 'json',
//             type: 'GET',
//             contentType: 'application/json',
//             data: JSON.stringify(dict),
//             success: function( data, textStatus, jQxhr ){
//                 $('#response pre').html( data );
//             },
//             error: function( jqXhr, textStatus, errorThrown ){
//                 console.log( errorThrown );
//             }
//         });
//         $.each(data, function(key, value){
//             movie_data += '<tr>';
//             movie_data += '<td>' + value.title + '</td>';
//             movie_data += '<td>' + value.genre + '</td>';
//             movie_data += '<td>' + value.director + '</td>';
//             movie_data += '</tr>';
//         });
//         $('#movietable').append(movie_data);
//     });
// });



// (function($){
//     function processForm( e ){
//         var dict = {
//             Title : this["title"].value,
//             Genre : this["genre"].value,
//         	Director: this["director"].value


//         };
//         $.post("https://localhost:44325/api/movie/Post", function(dict){
    	
//     	var parseData = '';
//     	var parseData = JSON.stringify(data);
    	
    	
//         console.log(parseData);
//     })
        // $.ajax({
        //     url: 'https://localhost:44325/api/movie/Post',
        //     dataType: 'json',
        //     type: 'post',
        //     contentType: 'application/json',
        //     data: JSON.stringify(dict),
        //     success: function( data, textStatus, jQxhr ){
        //         $('#response pre').html( data );
        //     },
        //     error: function( jqXhr, textStatus, errorThrown ){
        //         console.log( errorThrown );
        //     }
        // });

//         e.preventDefault();
//     }

//     // $('#my-form').submit( processForm );
//     $( "#my-form" ).submit(function( processForm() ) {
//   	alert( "Handler for .submit() called." );
//   	event.preventDefault();
// });
//     $( "#other" ).click(function() {
//   	$( "#my-form" ).submit();
// });
// })(jQuery);

