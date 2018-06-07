
$(document).ready(function () {
    $.ajax({             // attach a handler to an event for the elements        
        type: 'GET',
        url: 'http://127.0.0.1:3050/liste',
        success: function (datas) {
            datas.sort(function (a, b) {
                return b.niveau - a.niveau;
            });
            for (var i = 0, c = datas.length; i < c; i++) {
                console.log(datas[i].competence)

                    $('#liste').append('<li class="liste_item"> ' + datas[i].competence + '   ' + starimpl(datas[i].niveau) + '</li>');



            }
        },
        error: function () {
            // alert('La requête n\'a pas abouti');
        }
    })
});

// etoiles pour la notation
{/* <i class="far fa-star"></i> */ }

function starimpl(niveau) {
    var etoile = '<i class="far fa-star"></i>';
    var etoiles = '';
    for  (i=0, c=niveau; i<c ; i++) {
       
        etoiles += etoile;
    }
    return etoiles;
}

// $("#demo").addClass("big red"); // add class
