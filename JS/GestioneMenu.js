"use strict"

let  tot = 0.00;

let T = false;

var Co = new Array(8.50,9.50,8.00,10.50,9.50,8.50,7.50,5.50,19.50,18.50,14.50,13.50,14.50,29.50,7.50,17.50,10.50,9.75,5.50,9.70,6.50,3.50,5.50,10.00,1.00,1.50,2.00,1.50,1.50, 1.50, 2.00,3.50);

var Cnt = new Array(32);

var  UPDO;

let Stampa;

let finale,inpt




window.onload = function ()
{
  finale = document.getElementById("finale")

  inpt = document.getElementById("inpt")

  // CARICA DI Cnt e AZZERA COLORAZIONE

  UPDO = document.getElementsByName("FD");

  Stampa = document.getElementById("ST");

  for(let i=0;i<32;i++)
  {
    Cnt[i] = 0;
    UPDO[i].value = 0;
    UPDO[i].style.backgroundColor = "White";
  }

  inpt.value = "";


  Stampa.innerText = tot.toString();



}

// ------------------------------------------------- PRIMI #0 ------------------------------------------------- //



// ------------------------------------------------- PRIMI #1 ------------------------------------------------- //

function AggiungiOrdine0(n)
{
  Cnt[n]++;
  UPDO[n].value = Cnt[n];

  tot += Co[n];

  console.log(tot);

  Stampa.innerText = tot.toString();

  UPDO[n].style.backgroundColor = "Yellow";

}

function AggiornaConta0(n)
{

  Cnt[n] = UPDO[n].value;
  let i;

  tot = 0;

  for(i=0;i<32;i++)
  {
    tot += (Cnt[i]*Co[i]);
    console.log(tot);
    UPDO[i].style.backgroundColor = "White";
  }

  Stampa.innerText = tot.toString();

}

function controllo()
{


  if(Stampa.innerText == (0).toString())
  {
    swal("ATTENZIONE", "NON HAI ANCORA ORDINATO NULLA, SE VUOI USCIRE DALLA PERSONIZZAZIONE CLICCA SUL BOTTONE 'CHIUDI' SITUATO A DESTRA","warning");
  }
  else
  {
    if(inpt.value == "")
    {
      swal("ATTENZIONE","NON hai inserito il numero del tuo tavolo","warning");

    }
    else
    {
      swal("Fatto!", "La tua Ordinazione è stata completata: PREMI SUL TASTO CHIUDI PER USCIRE", "success");
      T = true;
      reset()
    }

  }


}


function reset()
{
  if(T == true)
  {
    tot = 0.00;
    T = false;

    for(let i=0;i<32;i++)
    {
      UPDO[i].value = 0;
      Cnt[i] = 0;
      UPDO[i].style.backgroundColor = "White";
    }

    inpt.value = "";


    Stampa.innerText = tot.toString();

  }

}




