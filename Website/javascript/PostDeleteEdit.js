let editForm = {};
(() => {
    const parsedUrl = new URL(window.location.href);
    const id = parsedUrl.searchParams.get("id");
    if (id) {
        fetch(`http://localhost:3000/posts/${id}`)
            .then(response => response.json())
            .then(data => fillForm(data))
    }
})()

function fillForm(data) {
    editForm = data;
    const form = document.getElementById('question')
    form.onsubmit = edit;
    const deleteButton = `<button onclick="deletePost(); window.location = './index.html';" id="delete" type="button">Delete</button>`;
    form.innerHTML += deleteButton;
    document.getElementById('author').value = data.author;
    document.getElementById('date').value = data.date;
    document.getElementById('title').value = data.title;
    document.getElementById('content').value = data.content;
    document.getElementById('tags').value = data.tags;
}

function edit(e) {
    e.preventDefault();
    const parsedUrl = new URL(window.location.href);
    const id = parsedUrl.searchParams.get("id");
    const obj = getForm(editForm);
    if (obj) {
        put(obj, id);
        window.location = './index.html';
    }
}

function postForm() {
    const obj = getForm();
    if (obj) {
        post(obj);
        window.location = './index.html';
    }
}

function getForm(obj = null) {
    const form = document.querySelector('#question').elements;
    if (!obj) {
        obj = {
            "author": "",
            "date": "",
            "title": "",
            "content": "",
            "tags": [],
            "viewCount": "0",
            "answerCount": "0",
            "votesCount": "0",
        }
    }

    const dateNow = new Date().toISOString().slice(0, 10);
    for (let i = 0; i < 4; i++) {
        if (form[i].value) {
            if (dateNow >= form[1].value) {
                obj[form[i].name] = form[i].value;
            }
            else {
                errorMsg(`Sorry you can't write to the future`)
                return false;
            }
        } else {
            errorMsg(`All fields (except tags) must be filled`);
            return false;
        }
    }
    if (form[4].value) {
        obj.tags = form[4].value.split(',');
    }
    return obj;
}

function errorMsg(msg) {
    error = document.getElementById('error');
    error.textContent = msg;
    error.style.display = 'block';
}

async function post(obj) {
    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
}

async function put(obj, id) {
    await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
}

async function deletePost() {
    const parsedUrl = new URL(window.location.href);
    const id = parsedUrl.searchParams.get("id");
    await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}