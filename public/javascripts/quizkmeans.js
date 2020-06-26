/*
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

}*/

var Quiz;
var test;
var opccoes;
window.onload = function() {
    Quiz = document.getElementById('quizKmeans')
    getperguntas()
        //opccoes = document.getElementById('opccoes')

}
var serverData = {};
var quizz = []
var quizResults = {};

function getperguntas() {
    $.ajax({
        url: '/api/Questionario_2',
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json", // receiving in json
        success: function(res, status) {
            quiz = res;
            serverData = res; //Used for later comparision;
            console.log("Testing res ::: ", quiz);
            var html = ''
            var htm = ''
            for (i in quiz) {

                id1 = Math.floor(Math.random() * 999999);
                id2 = Math.floor(Math.random() * 999999);

                /*         html += "<p>" + quiz[i].perguntas + "</br><input type='radio' name='quiz"+i+"' onclick='test(" + id1 + ");verificar(" + quiz[i].idQuestionario + ")'  value='Yes' id='" + id1 + "'>Yes</br><input type='radio' name='quiz' onclick='test(" + id2 + ");verificar(" + quiz[i].idQuestionario + ")' value='No' id='" + id2 + "'>No</p>"; */
                //The same data can be set in a more modern and fashioned way as shown belown
                html += `<p> ${quiz[i].perguntas}</br><input style='cursor:pointer;' type='radio' name='quiz${i}' onclick='test(${id1});'  value='yes' id='${id1}'>Yes</br><input style='cursor:pointer;' type='radio' name='quiz${i}' onclick='test("${id2}");' value='no' id='${id2}'>No</p>`;
                // console.log(quiz[i].respostas);
                quizResults[`quiz${i}`] = 'no';
            }

            Quiz.innerHTML = html;

            quizz.push(quiz)

        },
        error: function() {

        }
    })

}

function submeter() {
    //Get quiz results;
    let quizData = {};
    let results = "";
    let keys = Object.keys(quizResults);
    /*  console.log("Quiz Results ::: ", quizResults); */
    keys.forEach(((key, quizkmeans) => {
        let result = $(`input[name=${key}]:checked`).val();
        //Index will be used to locate question
        quizData[key] = result ? result : 'no';
        //Verify quiz answer and report result to user
        if (serverData[quizkmeans].respostas.toString().toLowerCase() !== quizData[key].toString().toLowerCase()) {
            //Wrong answer
            results += `<p>Q: ${serverData[quizkmeans].perguntas}: <small class='text-danger'>(Wrong answer:${quizData[key].toString()})</small><br/>Right answer is: ${serverData[quizkmeans].respostas} </p>`;
        } else {
            //Correct answer
            results += `<p>Q: ${serverData[quizkmeans].perguntas}: <small class='text-success'>Correct answer</small></p>`;
        }
    }));
    /* console.log("Information from quiz ::: ", quizData,results); */
    /*  alert(list); */
    $("#results-modal-body").html(results);
    $('#resultsModal').modal('show');


}