const radio = document.querySelector('.manual-btn')
var cont = 1
var cont2 = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
    cor()
}, 5000)

function proximaImg(){
    cont++
    if(cont>3){
        cont = 1
    }
    document.getElementById('radio'+cont).checked = true
}

function cor(){
    cont2++
    if(cont2>3){
        cont2 = 1
    }
    document.querySelector('.auto-btn1').style.backgroundColor = 'blueviolet'
    document.querySelector('.auto-btn1').style.opacity = '0'
    document.querySelector('.auto-btn2').style.backgroundColor = 'blueviolet'
    document.querySelector('.auto-btn2').style.opacity = '0'
    document.querySelector('.auto-btn3').style.backgroundColor = 'blueviolet'
    document.querySelector('.auto-btn3').style.opacity = '0'
    switch (cont2){
        case 1:
            document.querySelector('.auto-btn1').style.opacity = '1'
            break
        case 2:
            document.querySelector('.auto-btn2').style.opacity = '1'
            break
        case 3:
            document.querySelector('.auto-btn3').style.opacity = '1'
            break
        default:
            window.alert('ERR0!')
    }
}