//Definir variáveis para cada ponteiro e para o relógio digital
let digitalElement = document.querySelector('.digital')
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')


function updateClock() {
    //Definir variáveis para cada ponteiro
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()

    //Colocar horas no relógio digital com o fixZero para corrigir o bug quando tempo < 10
    digitalElement.innerHTML = `${fixZero(hour)}: ${fixZero(minute)}: ${fixZero(second)}`

    //Divide os graus do relógio pelos segundos para ajustar o andamento do ponteiro, multiplica pelos
    //segundos e diminui 90 do resultado final para que o ponteiro comece em cima ao invés de começar na direita
    let sDeg = ((360 /60) * second) -90
    let mDeg = ((360 /60) * minute) -90
    let hDeg = ((360 /60) * hour) -90
    sElement.style.transform = `rotate(${sDeg}deg)`
    mElement.style.transform = `rotate(${mDeg}deg)`
    hElement.style.transform = `rotate(${hDeg}deg)`
}
//FixZero para corrigir o bug quando tempo < 10
function fixZero(time) {
    return time < 10 ? `0${time}` : time
}
//Definir o tempo para atualização do relógio, neste caso, a cada 1 seg.
setInterval(updateClock, 1000)
updateClock()