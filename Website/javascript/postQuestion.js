(() => {
    const parsedUrl = new URL(window.location.href);
    const id = parsedUrl.searchParams.get("id");
    if (id) {
        fetch(`http://localhost:3000/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('author').value = data.author;
                document.getElementById('date').value = data.date;
                document.getElementById('title').value = data.title;
                document.getElementById('content').value = data.content;
                document.getElementById('question').onsubmit = Edit;
                // console.log(data)
            })
    }
})()

function Edit(e) {
    e.preventDefault();
    const parsedUrl = new URL(window.location.href);
    const id = parsedUrl.searchParams.get("id");
    const obj = getForm();
    if (obj)
    Put(obj, id);
}

function postForm() {
    const obj = getForm();
    if (obj)
    Post(obj);
}

function getForm() {
    const form = document.querySelector('#question').elements;
    let obj = {
        "author": "",
        "date": "",
        "title": "",
        "content": "",
        "tags": [],
        "viewCount": "0",
        "answerCount": "0",
        "votesCount": "0",
    }
    for (let i = 0; i < form.length - 1; i++) {
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
}

async function Put(obj, id) {
    await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
}