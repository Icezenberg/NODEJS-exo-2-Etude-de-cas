
$(document).ready(function () {
    $.ajax({             // attach a handler to an event for the elements        
        type: 'GET',
        url: 'http://127.0.0.1:3050/liste',
        success: function (datas) {
            for (var i = 0, c = datas.length; i < c; i++) {
                console.log(datas[i].compétence)

                $('#liste').append('<li class="liste_item"> Compétence : ' + datas[i].compétence + '   '+ datas[i].niveau + '</li>');
            }
        },
        error: function () { 
            // alert('La requête n\'a pas abouti');
        }
    })
});