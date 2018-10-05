$(document).ready(function(){

    $(document).on('click', '#submit', function(){
        var burger = {
            name: $('#cheese').val()
        }
        console.log(burger, "burger create");
        $.post('/', burger, function(response){
            console.log(response)
        });

    });

    $(document).on('click', '.undo', function(){
        var burger = {
            id : $(this).attr('data-id'),
            devoured: true
        }

        $.post('/update',burger, function(response){
            console.log(response);
            window.location = '/'
        });
    });

    $(document).on('click', '.eat', function(){
        var burger = {
            id : $(this).attr('data-id'),
            devoured: false
        }

        $.post('/update',burger, function(response){
            console.log(response);
            window.location = '/'
        });
    });



});

function getAll() {
    $.get('/', function(res){

    });
}