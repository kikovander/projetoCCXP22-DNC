const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento ="25 jan 2023"

function countDown () {
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje) / 1000 //valor em milisegundos, por isso /1000

    const quantDias = Math.floor (segTotal / 60 / 60 / 24);
    const quantHoras = Math.floor (segTotal / 60 / 60) % 24;
    const quantMinutos = Math.floor (segTotal / 60) % 60;
    const quantSegundos = Math.floor (segTotal) % 60;

    dia.innerHTML = formatoTempo(quantDias) + "D"
    hora.innerHTML = formatoTempo(quantHoras) + "H"
    minuto.innerHTML = formatoTempo(quantMinutos) + "M"
    segundo.innerHTML = formatoTempo(quantSegundos) + "S"

}

function formatoTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}

countDown()
setInterval(countDown, 1000) //1000 milisegundos