// let nome = "Camila";

// let notaPrimeiroBimestre = 9;
// let notaSegundoBimestre = 7;
// let notaTerceiroBimestre = 4;
// let notaQuartoBimestre = 2;

// let notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4 ;
// let notaFixada = notaFinal.toFixed(1);

// console.log("Bem vinde, " + nome)
// console.log(notaFixada)

function calculoMedia() {
   let primeiro = document.getElementById("first").value;
   let segundo = document.getElementById("second").value;
   let terceiro = document.getElementById("third").value;
   let quarto = document.getElementById("fourth").value;

   let media = document.getElementById("media").value;

   let notaFinal =
      (Number(primeiro) + Number(segundo) + Number(terceiro) + Number(quarto)) /
      4;

   //Resultado
   document.getElementById("aprovado").style.display = 'none';
   document.getElementById("reprovado").style.display = 'none';

   if (notaFinal >= media) {
      document.getElementById("aprovado").style.display = 'block';
      document.getElementById("aprovado").innerHTML = '<span class="apto">Parabéns! </span>' + 'Você foi aprovado com média: ' + notaFinal;

   } else {
      document.getElementById("reprovado").innerHTML = '<span class="rep">Reprovado! </span>' + 'Sua média foi: ' + notaFinal;
      document.getElementById("reprovado").style.display = 'block';
   }
}
