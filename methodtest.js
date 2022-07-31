export function init(formEl, postBtn, getBtn, putBtn, deleteBtn, outputEl) {
    bindBtn(formEl, postBtn, 'post', outputEl);
    bindBtn(formEl, getBtn, 'get', outputEl);
    bindBtn(formEl, putBtn, 'put', outputEl);
   
    bindBtn(formEl, deleteBtn, 'delete', outputEl);
}
function bindBtn(formEl, btnEl, method, outputEl) {
    switch(method) {
        case 'get': 
            btnEl.addEventListener('click', ()=>{
                formEl.action = "https://httpbin.org/get";
                formEl.method = "GET";
                fetchGet(formEl, outputEl);
            })
            break;
        case 'post':
            btnEl.addEventListener('click', ()=>{
                formEl.action = "https://httpbin.org/post";
                formEl.method = "POST";
                fetchPost(formEl, outputEl);
            })
            break;
        case 'put':
            btnEl.addEventListener('click', ()=>{
                formEl.action = "https://httpbin.org/put";
                fetchPut(formEl, outputEl);
            })
            break;
        case 'delete':
            btnEl.addEventListener('click', ()=>{
                formEl.action = "https://httpbin.org/delete";
                fetchDelete(formEl, outputEl);
            })
            break;
        default:
            break;
    }
}
function fetchGet(formEl, outputEl) {
    const date = new Date();
    document.getElementById("date").value = date;
    fetch(`https://httpbin.org/get`, {
        method: formEl.method,
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then((response)=>{
        formEl.reset();
        return response.json();
    })
    .then((data)=>{
        outputEl.innerText = JSON.stringify(data, null, 4);
    })
}
function fetchPost(formEl, outputEl) {
    const date = new Date();
    document.getElementById("date").value = date;
    const formData = new FormData(formEl);
    fetch(`https://httpbin.org/post`, {
        method: formEl.method,
        headers: {
            'Content-type': 'application/json'
        },
        body: formData
    })
    .then((response)=>{
        formEl.reset();
        return response.json();
    })
    .then((data)=>{
        outputEl.innerText = JSON.stringify(data, null, 4);
    })
}

function fetchPut(formEl, outputEl) {
    const date = new Date();
    console.log(date)
    document.getElementById("date").value = date;
    const formData = new FormData(formEl);
    fetch(`https://httpbin.org/put`, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: formData
    })
    .then((response)=>{
        formEl.reset();
        return response.json();
    })
    .then((data)=>{
        outputEl.innerText = JSON.stringify(data, null, 4);
    })
}

function fetchDelete(formEl, outputEl) {
    const date = new Date();
    document.getElementById("date").value = date;
    const formData = new FormData(formEl);
    fetch(`https://httpbin.org/delete`, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        },
        body: formData
    })
    .then((response)=>{
        formEl.reset();
        return response.json();
    })
    .then((data)=>{
        outputEl.innerText = JSON.stringify(data, null, 4);
    })
}