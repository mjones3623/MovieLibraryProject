$(function(){
    $.get("https://localhost:44325/api/movie/", function(data){
        console.log(data);
    })
});

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

