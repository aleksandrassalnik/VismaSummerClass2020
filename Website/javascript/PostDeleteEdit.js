let editForm = {};
(() => {
    const parsedUrl = new URL(window.location.href);
    const id = parsedUrl.searchParams.get("id");
    if (id) {
        fetch(`http://localhost:3000/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                editForm = data;
                document.getElementById('author').value = data.author;
                document.getElementById('date').value = data.date;
                document.getElementById('title').value = data.title;
                document.getElementById('content').value = data.content;
                const form = document.getElementById('question')
                form.onsubmit = Edit;
                const deleteButton = document.createElement('button');
                deleteButton.onclick = DeletePost;
                deleteButton.textContent = 'Delete';
                deleteButton.id = 'delete';
                deleteButton.type = 'button';
                form.append(deleteButton);
            })
    }
})()

async function DeletePost() {
    const parsedUrl = new URL(window.location.href);
    const id = parsedUrl.searchParams.get("id");
    await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    window.location = './index.html';
}

function Edit(e) {
    e.preventDefault();
    const parsedUrl = new URL(window.location.href);
    const id = parsedUrl.searchParams.get("id");
    const obj = getForm(editForm);
    if (obj)
        Put(obj, id)
}

function postForm() {
    const obj = getForm();
    if (obj)
        Post(obj)
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
    for (let i = 0; i < 4; i++) {
        if (form[i].value) {
            obj[form[i].name] = form[i].value;
        } else {
            error = document.getElementById('error');
            error.textContent = 'All fields must be filled';
            error.style.display = 'block';
            return;
        }
    }
    return obj;
}

async function Post(obj) {
    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    window.location = './index.html';
}

async function Put(obj, id) {
    await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    window.location = './index.html';
}