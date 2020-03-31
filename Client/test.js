(function($){
    function processForm( e ){
        var dict = {
            Title : this["title"].value,
            Genre : this["genre"].value,
        	Director: this["director"].value


        };
        $.post("https://localhost:44325/api/movie/Post", function(dict){
    	
    	var parseData = '';
    	var parseData = JSON.stringify(data);
    	
    	
        console.log(parseData);
    })
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

        e.preventDefault();
    }

    // $('#my-form').submit( processForm );
    $( "#my-form" ).submit(function( event ) {
  	alert( "Handler for .submit() called." );
  	event.preventDefault();
});
    $( "#other" ).click(function() {
  	$( "#my-form" ).submit();
});
})(jQuery);