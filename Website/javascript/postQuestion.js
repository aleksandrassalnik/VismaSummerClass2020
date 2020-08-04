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
    for (let i = 0; i < form.length-1; i++)
    {
        if (form[i].value) {
            obj[form[i].name] = form[i].value;  
        } else {
            error = document.getElementById('error');
            error.textContent = 'All fields must be filled';
            error.style.display = 'block';
            return;
        }
    }
    Post(obj);
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