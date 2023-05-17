function handleModal(){
  let modal = document.querySelector('.modal')
  modal.style.display = 'flex';
}
function handleClose(){
   let close = document.querySelector('.modal')
   close.style.display = 'none'
}

function modal2Test(){
  let modal = document.querySelector('.modal2')
  modal.style.display = 'flex';
}

function handleClose2(){
  let close = document.querySelector('.modal2')
  close.style.display = 'none'
}

function telVerify() {
  var telefone = document.getElementById("telInpt").value;
  var cel = document.getElementById("textInpt").value;
  if (telefone.length < 8 && cel.length === 0) {
    alert("TxtTelefone tem de ter 8 dígitos!");
  }
  if (cel.length < 9 && telefone.length > 1) {
    alert("TxtCelular tem de ter 9 dígitos!");
  }
}
