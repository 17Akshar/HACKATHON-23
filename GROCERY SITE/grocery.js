function Change(n){
  if(n==1){
    document.getElementById("orders").style.marginTop = "0px"
    document.getElementById("profile").style.marginTop = "0px"
  }
  else if(n==2){
    document.getElementById("orders").style.marginTop = "-900px"
    document.getElementById("profile").style.marginTop = "0px"
  }
  else{
    document.getElementById("orders").style.marginTop = "-900px"
    document.getElementById("profile").style.marginTop = "-900px"
  }
}