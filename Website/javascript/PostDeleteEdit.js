import link from './links.js';
import template from './templates.js';
import Rest from './rest.js';
const rest = new Rest();

(async () => {
    document.querySelector("#newPost").addEventListener('click', postForm)
    let editForm = {};
    const parsedUrl = new URL(window.location.href);
    const id = parsedUrl.searchParams.get("id");

    if (id) {
        fillForm(await rest.get(link.database, id));
    }

    async function postForm() {
        const obj = getForm();
        if (obj) {
            await rest.post(link.database, obj);
            window.location = './index.html';
        }
    }

    function edit() {
        const obj = getForm(editForm);
        if (obj) {
            rest.put(link.database, obj, id);
            window.location = './index.html';
        }
    }

    function fillForm(data) {
        editForm = data;
        //Adding edit function instead of post on submit button.
        document.getElementById('newPost').removeEventListener('click', postForm);
        document.getElementById('newPost').addEventListener('click', edit);
        
        const form = document.getElementById('question');
        
        //Adding delete button. 
        form.insertAdjacentHTML('beforeend', template.deleteButton);
        document.querySelector("#delete").addEventListener('click', deletePost)

        //Filling form data
        document.getElementById('author').value = data.author;
        document.getElementById('date').value = data.date;
        document.getElementById('title').value = data.title;
        document.getElementById('content').value = data.content;
        document.getElementById('tags').value = data.tags;
    }

    async function deletePost() {
        rest.delete(link.database, id);
        window.location = './index.html'
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

        //getting todays data and transforming to yyyy-mm-dd format
        const dateNow = new Date().toISOString().slice(0, 10);

        //Converting form from object to array
        const formArr = Object.values(form);
        //Form validation and writting into object
        formArr.reduce((total, current, index, array) => {
            if (current.name) {
                if (current.value) {
                    if (dateNow >= array[1].value) {
                        obj[current.name] = current.value;
                    }
                    else {
                        errorMsg(`Sorry you can't write to the future`);
                    }
                } else errorMsg(`All fields (except tags) must be filled`);
            } 
        }, '')
        if (form[4].value) {
            obj.tags = form[4].value.split(',');
        }
        return obj;
    }

    function errorMsg(msg) {
        const error = document.getElementById('error');
        error.textContent = msg;
        error.style.display = 'block';
        return false;
    }
})()