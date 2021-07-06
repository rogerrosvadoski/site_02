function trocar() {
    var color1 = Math.random() * 255
    var color2 = Math.random() * 255
    var color3 = Math.random() * 255

    window.document.body.style.backgroundColor = `rgb(${color1},${color2},${color3})`


}

function trocarCor() {
    var cor1 = document.querySelector('input#cortxt')
    var cor2 = cor1.value
    window.document.body.style.backgroundColor = cor2
}