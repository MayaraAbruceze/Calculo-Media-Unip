function calcular(){
    var notaprova = parseFloat(document.getElementById("nota-prova").value);
    var notapim = parseFloat(document.getElementById("nota-pim").value);
    var notaava = parseFloat(document.getElementById("nota-ava").value);

    var media = ((7 * notaprova) + (2 * notapim) + notaava)/10;
    var mediafinal = media.toFixed(2);

    var exame = 10 - mediafinal;    

    if (mediafinal >= 6){
        var elementoResultado = document.getElementById("resultado");
        var valorResultado = "Parabéns, você foi aprovado(a).Sua média foi " + mediafinal+ ".";
        elementoResultado.innerHTML = valorResultado;
    } else{
        var elementoResultado = document.getElementById("resultado");        
        var valorResultado = "Sua média foi " + mediafinal+ "." + " Você precisa tirar " + exame + " no exame.";
        elementoResultado.innerHTML = valorResultado;
    }
}