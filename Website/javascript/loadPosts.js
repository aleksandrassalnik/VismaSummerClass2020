import template from './templates.js';
import link from './links.js';
(() => {
    //Loading questions
    try {
        fetch(link.database).then(response => response.json())
            .then(data => {
                const thread = document.getElementById('questionThread');
                data.forEach(elem => {
                    thread.insertAdjacentHTML('beforebegin', createQuestion(elem));
                })
            });
    }
    catch (e) {
        console.error(e);
    }

    function createQuestion(elem) {
        const url = new URL(window.location.href);
        if (url.pathname !== '/Website/newQuestions.html')
            return formQuestion(elem);
        else {
            if (elem.date === new Date().toISOString().slice(0, 10))
                return formQuestion(elem);
            else return '';
        }
    }

    function formQuestion(elem) {
        return template.question(elem);
    }
})()