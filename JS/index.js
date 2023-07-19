"use strict"
let _range, _testoRange;

// Utile a pulire il modal dopo aver inviato in modo da dare la possibilità di dare più Feedback.

function Pulisci()
{

  _range = document.getElementById("customRange");

  _testoRange = document.getElementById("comment");

  _testoRange.value = "";
  _range.value = 1;

  swal("Fatto!", "Grazie per il Tuo FeedbacK","success");

}


function controlloPSW()
{
  let pwd1,pwd2;

  pwd1 = document.getElementById("pwd1");

  pwd2 = document.getElementById("pwd2");

  if(pwd2.value != pwd1.value)
  {
    swal("ATTENZIONE!", "Le password NON corrispondono, Riprova","warning");
  }



}




