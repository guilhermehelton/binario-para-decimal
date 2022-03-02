function paraDecimal(elemento){
    return parseInt(elemento.value, 2)
}

function paraBinario(elemento){
    return (elemento.value >>> 0).toString(2)
}

const botao = document.querySelector('.converter')
botao.addEventListener('click', () =>{
    const binario = document.querySelector('.binario')
    const decimal = document.querySelector('.decimal')
    if(binario.value){
        decimal.value = paraDecimal(binario)
        binario.value = null
    } else{
        binario.value = paraBinario(decimal)
        decimal.value = null
    }
})