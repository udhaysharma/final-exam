let counter = document.querySelector('#count-display');
console.log(counter);

let increase= document.querySelector('.increase');
console.log(increase);

let decrease= document.querySelector('.decrease')
console.log(decrease);

let count=0;
increase.addEventListener("click",()=>{
    count++;
    counter.innerHTML=`${count}`



})

decrease.addEventListener("click",()=>{

    count--;
    console.log(count);
    
    counter.innerHTML=`${count}`

})