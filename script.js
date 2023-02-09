const draggables=document.querySelectorAll('.draggable')
console.log(draggables)
const containers=document.querySelectorAll('.container')


draggables.forEach(draggable=>{
    draggable.addEventListener('dragstart',()=>{
        draggable.classList.add("dragging")
    })

    draggable.addEventListener('dragend',()=>{
        draggable.classList.remove("dragging")
    })
})

containers.forEach(container=>{
    container.addEventListener('dragover',e=>{
        e.preventDefault()
        const afterElement=getDragAfterElement(container,e.clientX);
        const draggable=document.querySelector('.dragging')
        container.appendChild(draggable)
    })
})

function getDragAfterElement(container,y){
  const draggableelements=  [...container.querySelectorAll('draggable:not(.dragging)')]

  draggableelements.reduce((closest,child)=>{

  },{ offset:Number.POSITIVE_INFINITY})
}

