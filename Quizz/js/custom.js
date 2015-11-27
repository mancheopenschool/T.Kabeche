$(document).ready(function(){


     $.getJSON('./quizz.json', function(json){
     var nbrQuestions = Object.keys(json).length;
     for (var i = 1; i <= nbrQuestions; i++){
     console.log(json[i].NQ);
     $('<p class="question">'+ json[i].Question +'</p>').appendTo($('div'));
     console.log(json[i].Réponse);
     var nbrReponses = Object.keys(json[i]['Choix']).length;
     for (var e = 0; e < nbrReponses; e++){
     $('<input type="radio" name="' + json[i].NQ + '" checked value="' + json[i].choix[e] + '"> ' + json[i].choix[e] + '<br />').appendTo($('div'));
     }
     }
     });


});

var mettage = $('.quizz');

/*function nbrQuestions(){
    var test;
    $.getJSON('./quizz.json', function(json){
        test= Object.keys(json).length;
    });
    return test;
}
*/
function nombreAlea(min, max){
    return Math.floor(Math.random() * max + min);
}

function getQuestion(num){
    $.getJSON('./quizz.json', function(json){
        $('<p class="question">'+ json[num].Question +'</p>').appendTo(mettage);
    })
}

function getReponse(num){
    $.getJSON('./quizz.json', function(json){
        var nbrReponses = Object.keys(json[num]['Choix']).length;
        for (var e = 0; e < nbrReponses; e++){
            $('<input type="radio" name="' + json[num].NQ + '" value="' + json[num].NQ + json[num].Choix[e] + '"> ' + json[num].Choix[e] + '<br />').appendTo(mettage);
        }
    })
}

function getQR(num){
    mettage.empty();
    getQuestion(num);
    getReponse(num);
}