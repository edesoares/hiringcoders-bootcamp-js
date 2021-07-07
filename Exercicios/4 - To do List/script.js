// Capturando elementos do html

const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lista = []

newListForm.addEventListener('submit', function(e){
    e.preventDefault()
    const listName = newListInput.value
    if (listName === null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lista.push(list)
    render()
})

function createList(name){
    return {id: Date.now().toString(), name: name}
}

function render(){
    clear(listContainer)
    lista.forEach(function(list){
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list.name
        listContainer.appendChild(item)
    })
}

function clear(element){
    while (element.firstChild){
        element.removeChild(element.firstChild)
    }
}

render()