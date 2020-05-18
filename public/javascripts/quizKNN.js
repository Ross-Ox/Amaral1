var Quiz;
var test;
var opccoes;
window.onload = function() {
    Quiz = document.getElementById('quizKnn')
    getperguntas()
    opccoes = document.getElementById('opccoes')

}

function getperguntas() {
    $.ajax({
        url: '/api/Questionario',
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json", // receiving in json
        success: function(res, status) {
            quiz = res
            var html = ''
            var htm = ''
            for (i in quiz) {

                html += "<p>" + quiz[i].perguntas + "</br><input type='radio' name='quiz' id='opccoes'>Sim</br><input type='radio' name='quiz' id='opccoes'>Não</p>";
            }

            Quiz.innerHTML = html;
            //opccoes.innerHTML = htm;


        },
        error: function() {

        }
    })

}