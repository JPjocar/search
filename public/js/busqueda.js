const input = document.querySelector('#input_search');
const list = document.querySelector('#resultsList');
const token = document.querySelector('input[name="_token"]').value;

input.addEventListener('input', getInputValue);
list.addEventListener('click', selectElement);
input.addEventListener('keydown', enableElementList);

async function getInputValue(event){
    const value = event.target.value.trim().toLowerCase();
    if(!value){
        hiddenList(); 
        return;
    }
    const results = await filterResults(value);
    showResults(results);
}

function hiddenList(){
    deleteElements();
    list.classList.add('hidden');
}

function deleteElements(){
    list.innerHTML = '';
}

function showResults(results){
    const elements = results.reduce((acc, cv, i) => {
        return acc + `<li data-id="${cv.id}" class="${(i===0?'selected':'')}" >${cv.nombre}</li>`
    }, "");
    list.innerHTML = elements;
    list.classList.remove('hidden');
}

async function filterResults(value){
    return await fetch('/filtrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': token
        },
        body: JSON.stringify({word: value})
    })
    .then(response => response.json())
    .catch(error => console.log(error))
}

function selectElement( evento ){
    if(!(evento.target.nodeName = "LI")) return;
    const value = evento.target.textContent;
    input.value = value;
    hiddenList();
}

function enableElementList(event){
    const { key } = event;
    let elemento = document.querySelector('li[class="selected"]');
    if(!elemento) return;
    elemento.classList.remove('selected');
    if(key==="ArrowUp"){
        elemento = elemento.previousElementSibling;
        if(!elemento) elemento = list.lastElementChild;
    }else if(key==="ArrowDown"){
        elemento = elemento.nextElementSibling;
        if(!elemento) elemento = list.firstElementChild;
    }else if(key==="Enter"){
        input.value = elemento.textContent;
        hiddenList();
    }
    enableElement(elemento);
}

function enableElement(element){
    element.classList.add('selected');
}

