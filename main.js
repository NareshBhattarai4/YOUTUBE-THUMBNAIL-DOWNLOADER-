

let form=document.getElementById("form");
let img=document.getElementById("img");
let btn=document.querySelector(".btn");




form.addEventListener('submit',(e)=>{
  e.preventDefault();
  
  let url=document.getElementById("inputURL").value;
  
let patten= "https://youtu.be/";

  
  
  let valid=url.split('be/')[1];
  
  let thumb=`https://img.youtube.com/vi/${valid}/hqdefault.jpg`;
  
  img.src=thumb;
 
  
})
