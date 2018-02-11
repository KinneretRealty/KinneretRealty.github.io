$(document).ready(function() {
    $('#NextButton').click(toggleStep)
    $('input[type=radio]').click(function() {
        console.log($('#Eco').prop("checked"), $('#Avg').prop("checked"), $('#Lrg').prop("checked"));
    })

    $('#minusEmployees').click(function() {
        document.getElementById('numOfEmployees').stepDown();
    })
    $('#plusEmployees').click(function() {
        document.getElementById('numOfEmployees').stepUp();
    })

})

var currentStep = 0;
function toggleStep() {
    if (currentStep < 4) {currentStep += 1}
    else {currentStep = 0}
    const steps = ['One', 'Two','Three','Four','Five'];
    for (i in steps) {
        document.getElementById(`${steps[i]}`).style.display = 'none';
    }
    document.getElementById(`${steps[currentStep]}`).style.display = 'block';
    document.getElementById('NextButton').innerHTML = `${currentStep + 1}/5>`;
    document.getElementById('ProgressColor').style.width = `calc(${(currentStep + 1)*100}% / 5)`;

}
