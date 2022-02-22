let reponses = [

    5, 2, 9, 3, 4, 8, 7,
    6, 7, 1, 9, 4,
    3, 8, 4, 6, 2, 9,

    6, 5, 3, 4, 8, 7, 1,
    7, 1, 6, 2, 3, 5, 8,
    3, 9, 5, 7, 2, 4, 6,

    4, 1, 3, 8, 6,
    8, 5, 6, 2, 9, 4,
    7, 9, 1, 3, 5

];

let saisies = document.querySelectorAll('.solution');

var btns = document.querySelectorAll('button');

btns[0].addEventListener('click', function () {
    let score = 0;

    for (let i = 0; i < saisies.length; i++) {

        if (saisies[i].value != '') {
            if (saisies[i].value == reponses[i]) {
                saisies[i].style.color = "green";
                saisies[i].setAttribute('readonly', 'readonly');
                score++;
            } else {
                saisies[i].style.color = "red";

            }
        }
    }

    if (score == 55) {
        alert("Félicitations")


    }

});

//bouton voir la reponse 
btns[1].addEventListener('click', function () {
    let score = 0;



    for (let i = 0; i < saisies.length; i++) {

        saisies[i].value = reponses[i];
        saisies[i].style.color = "orange";
        btns[0].disabled = true;



    }

});
//bouton recommencer    

btns[2].addEventListener('click', function () {
    let score = 0;

    btns[0].disabled = false;

    for (let i = 0; i < saisies.length; i++) {

        saisies[i].value = '';
        saisies[i].style.color = "black";




    }

});
