const lists = document.querySelectorAll('.number')
console.log(lists)
lists.forEach((list)=>{
    console.log(list.dataset.number)
})
