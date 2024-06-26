let numero = 0;

function cambio() {
    let cambio = document.getElementById('cambio');

    numero = numero + 1;
    if (numero == 1) {
        cambio.src = '../img/img_form/imgform1.jpg';
    } else if (numero == 2) {
        cambio.src = '../img/img_form/imgform2.jpg';
    } else if (numero == 3) {
        cambio.src = '../img/img_form/imgform3.jpg';
    } else if (numero == 4) {
        cambio.src = '../img/img_form/imgform4.jpg';
    } else {
        cambio.src = '../img/img_form/imgform5.jpg';
        numero = 0;
    }
    setTimeout('cambio()', 3000);
}

document.body.setAttribute('onload', 'cambio()');
