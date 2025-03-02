document.getElementById("btn-1").addEventListener("click",function(){
    alert("Board updated successfully");
    this.disabled = true;
    this.style.backgroundColor = "#cccccc";
    const number1 = document.getElementById('number').innerText;
    const convertedNumber1=parseFloat(number1)-1;
    document.getElementById('number').innerText=convertedNumber1;

    const number2 =document.getElementById('number1234').innerText;
    const convertedNumber2 = parseFloat(number2)+1;
    document.getElementById('number1234').innerText=convertedNumber2;

    const notice1 =  document.getElementById('notice1');
    const newDate1 = new Date().toLocaleDateString();
    notice1.innerText=  "You have Complete The Task Add Dark Mode at "+ newDate1+" PM";
});

document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("notice1").innerText = ""; 
});



document.getElementById("btn-2").addEventListener("click",function(){
    alert("Board updated successfully");
    this.disabled = true;
    this.style.backgroundColor = "#cccccc";
    const number1 = document.getElementById('number').innerText;
    const convertedNumber1=parseFloat(number1)-1;
    document.getElementById('number').innerText=convertedNumber1;

    const number2 =document.getElementById('number1234').innerText;
    const convertedNumber2 = parseFloat(number2)+1;
    document.getElementById('number1234').innerText=convertedNumber2;

    const notice2 =  document.getElementById('notice2');
    const newDate2 = new Date().toLocaleDateString();
    notice2.innerText=  "You have Complete The Task Add Dark Mode at "+ newDate2+" PM";

    

});

document.getElementById("clear-btn").addEventListener("click",function(){
    document.getElementById("notice2").innerText="";
})




document.getElementById("btn-3").addEventListener("click",function(){
    alert("Board updated successfully");
    this.disabled = true;
    this.style.backgroundColor = "#cccccc";
    const number1 = document.getElementById('number').innerText;
    const convertedNumber1=parseFloat(number1)-1;
    document.getElementById('number').innerText=convertedNumber1;

    const number2 =document.getElementById('number1234').innerText;
    const convertedNumber2 = parseFloat(number2)+1;
    document.getElementById('number1234').innerText=convertedNumber2;

    const notice =  document.getElementById('notice3');
    const newDate = new Date().toLocaleDateString();
    notice.innerText=  "You have Complete The Task Add Dark Mode at "+ newDate+" PM";

});

document.getElementById("clear-btn").addEventListener('click',function(){
    document.getElementById('notice3').innerText="";
})



document.getElementById("btn-4").addEventListener("click",function(){
    alert("Board updated successfully");
    this.disabled = true;
    this.style.backgroundColor = "#cccccc";
    const number1 = document.getElementById('number').innerText;
    const convertedNumber1=parseFloat(number1)-1;
    document.getElementById('number').innerText=convertedNumber1;

    const number2 =document.getElementById('number1234').innerText;
    const convertedNumber2 = parseFloat(number2)+1;
    document.getElementById('number1234').innerText=convertedNumber2;

    const notice4 =  document.getElementById('notice4');
    const newDate4 = new Date().toLocaleDateString();
    notice4.innerText=  "You have Complete The Task Add Dark Mode at "+ newDate4+" PM";

});

document.getElementById('clear-btn').addEventListener('click',function(){
    document.getElementById("notice4").innerText="";
})




document.getElementById("btn-5").addEventListener("click",function(){
    alert("Board updated successfully");
    this.disabled = true;
    this.style.backgroundColor = "#cccccc";
    const number1 = document.getElementById('number').innerText;
    const convertedNumber1=parseFloat(number1)-1;
    document.getElementById('number').innerText=convertedNumber1;

    const number2 =document.getElementById('number1234').innerText;
    const convertedNumber2 = parseFloat(number2)+1;
    document.getElementById('number1234').innerText=convertedNumber2;

    const notice5 =  document.getElementById('notice5');
    const newDate5 = new Date().toLocaleDateString();
    notice5.innerText=  "You have Complete The Task Add Dark Mode at "+ newDate5+" PM";

});

document.getElementById('clear-btn').addEventListener('click',function(){
    document.getElementById("notice5").innerText="";
})



document.getElementById("btn-6").addEventListener("click",function(){
    alert("Board updated successfully");
    this.disabled = true;
    this.style.backgroundColor = "#cccccc";
    const number1 = document.getElementById('number').innerText;
    const convertedNumber1=parseFloat(number1)-1;
    document.getElementById('number').innerText=convertedNumber1;

    const number2 =document.getElementById('number1234').innerText;
    const convertedNumber2 = parseFloat(number2)+1;
    document.getElementById('number1234').innerText=convertedNumber2;
    const notice6 =  document.getElementById('notice6');
    const newDate6 = new Date().toLocaleDateString();
    notice6.innerText=  "You have Complete The Task Add Dark Mode at "+ newDate6+" PM";

});

document.getElementById('clear-btn').addEventListener('click',function(){
    document.getElementById("notice6").innerText="";
})



document.getElementById('discover').addEventListener("click",function(){
    window.location.href='main.html';
});


document.getElementById("theme-btn").addEventListener("click",function(){
    const randomColor ="#"+ Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor=randomColor;
});



