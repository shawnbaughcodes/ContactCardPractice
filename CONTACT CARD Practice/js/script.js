$(document).ready(function() {
     // Stuff to do as soon as the DOM is ready
    //  alert('Yo!!')

$(document).on('click', '#button', function func1(){

    $('#first').val();
    var first = $('#first').val();
    console.log(first);

    $('#last').val();
    var last = $('#last').val();
    console.log(last);

    $('#description').val();
    var description = $('#description').val();
    console.log(description);

    var card = '<div>'+
                '<h1>'+first+'</h1>'+
                '<h1>'+last+'</h1>'+
                '<p>'+description+'</p>'+
               '</div>';

               $('div.newcontent').append(card);
               $('p').html('<p>Click</p>');
    })
    $(document).on('click', 'p', function(){

        $('#description').val();
        var description = $('#description').val();
        console.log(description);

        var description = '<div>'+
                        '<p>'+description+'</p>'
                          '</div>';
        $('h1').hide();
        $(this).html('<p>'+description+'</p>');
    })
    // $('p').click(func1());

});
