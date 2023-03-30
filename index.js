let b1 = document.querySelector(".b1")
let papan = document.getElementById("data")
let next = document.querySelector(".next")

var data = ["selamat ulang tahun mutiara....", "semoga panjang umur", "sehat selalu", "jangan lupa belajar", "jangan mudah putus asa" , "semoga kuliahnya dipermudah", "jangan lupa beliin aku cimoll"];
let index = 0; 

b1.addEventListener('click',function(){
    let con1 = document.querySelector(".container1")


    b1.style.display = "none";
    if(b1 = "none"){
        con1.style.display = "block";
    }
});

next.addEventListener("click", () => {
  index = (index + 1) % data.length;
  let iya = document.querySelector(".iya");
  let tidak = document.querySelector(".tidak")
  
  if(index === 6){
    console.log("halo");
    next.style.display = "none";
    iya.style.display = "block";
    tidak.style.display = "block";
  }
  
  papan.textContent = data[index];
});
