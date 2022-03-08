var numSort = []
var numsco = []
function sorteioNum(){
    numSort = []
    do {
        let sort = Math.ceil(Math.random() * 60)
        if(!numSort.includes(sort))
    numSort.push(sort)
    } while (numSort.length < 6);

    document.getElementById("numSort").innerText = numSort
    verificacertos()
}
function getnum(valor, posicao){
    valor=Number(valor)
if(valor > 60){
    alert("valor é maior que 60")
    limpar(pos)
}
else if(valor<0){
alert("valor menor que 0")
limpar(pos)
}
else if(numsco. includes(valor)){
alert("valor já digitado")
limpar(pos)
}
else{
    numsco(posicao)=valor
}}
function limpar(pos){
document.getElementById(`num${pos}`).value = ""
}
function verificacertos(){
    numsco.forEach(function(valor,index){
        if(numSort.includes(valor)){
    cont+ cont+1
    }
})
document.getElementById("total").innerText = cont

}

    }
})
document.getElementById("total").innerText = cont

}

