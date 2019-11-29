//Création d'une fonction
function validation(){
  //Création de variables
  var size=document.getElementById("size").value;
  var dateOfBirth=document.getElementById("dateOfBirth").value;
  //variable result avec le calcul de l'exercice
  if(isNaN(size)==true||isNaN(dateOfBirth)==true){
    alert("erreur, ce n'est pas un nombre");
    //Sinon, le résultat du calcul
  }else{
    var result=((size*2+5)*50-dateOfBirth+1769);
    //Boîte de dialogue pour afficher le resultat des différents calculs
    alert(result);
  }
}
