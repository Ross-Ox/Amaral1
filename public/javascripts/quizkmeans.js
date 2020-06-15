var Quiz;
var test;
var opccoes;

window.onload = function() {
    Quiz = document.getElementById('quizKmeans')
    getperguntas()
    opccoes = document.getElementById('opccoes')

}
var quizz = []

function getperguntas() {
    $.ajax({
        url: '/api/Questionario_2',
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json", // receiving in json
        success: function(res, status) {
            quiz = res
            var html = ''
            var htm = ''
            for (i in quiz) {

                id1 = Math.random()
                id2 = Math.random()

                html += "<p>" + quiz[i].perguntas + "</br><input type='radio' name='quiz' onclick='test(" + id1 + ");verificar(" + quiz[i].idQuestionario_2 + ")'  value='Yes' id='" + id1 + "'>Yes</br><input type='radio' name='quiz' onclick='test(" + id2 + ");verificar(" + quiz[i].idQuestionario_2 + ")' value='No' id='" + id2 + "'>No</p>";

            }

            Quiz.innerHTML = html;

            quizz.push(quiz)

        },
        error: function() {

        }
    })

}



var certo
var perg
var list = []

function verificar(val) {

    for (i in quiz) {
        if (quiz[i].idQuestionario_2 == val) {
            certo = quiz[i].respostas

            perg = quiz[i].perguntas
        }
    }
    if (certo == sessionStorage.getItem('resp')) {

        alert('Your answer has been saved \nAnswer the next question!')

    } else {
        alert("Your answer has been saved  \nAnswer the next question!")
    }
    list.push(['Correct answers:' + '\n' + perg + '\n' + certo + '\n'])
    console.log(list)

}

function submeter() {
    alert(list)

}

function test(o) {
    resp = document.getElementById(o).value
    window.sessionStorage.setItem('resp', resp)

}