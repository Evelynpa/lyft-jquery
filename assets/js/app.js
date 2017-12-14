$(document).ready(function () {
    $('.splash').fadeOut(5000);
    var number = $('#number').val();
    // var max = 11;
    // function getRandomArbitrary(number, max) {
    //     console.log( Math.random() * (max - number) + number);
    // }
    $('#number').keyup(function () {
        if(number != 0){
            $('#btnNext').attr("disabled", true);
        }else{
            $('#btnNext').attr("disabled", false);
        }

    });

})