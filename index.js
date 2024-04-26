const lists = document.querySelectorAll('.number')
console.log(lists)



function update(list){
    let initialValue = 0
    let max =  parseInt(list.dataset.number);
   console.log(max)
   const i = setInterval(()=>{
   initialValue++
   if(max>10000){
    initialValue+=10;
   }
    if(initialValue>max){
        clearInterval(i);
        return;
    }
    list.textContent=`${initialValue}+`
  
   },1)
  
   
}

  


lists.forEach((list)=>{
   update(list)
})
