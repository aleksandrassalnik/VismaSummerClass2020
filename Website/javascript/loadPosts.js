(() => {
    try {
        fetch('http://localhost:3000/posts').then(response => response.json())
            .then(data => {
                const thread = document.getElementById('questionThread');
                data.forEach(elem => {
                    thread.innerHTML += createQuestion(elem);
                })
            });
    }
    catch (e) {
        console.error(e);
    }
})()

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

function getTags(elem) {
    let tags = '';
    elem.tags.forEach(tag => {
        tags += `<p class="tag">${tag}</p>`;
    })
    return tags;
}

function formQuestion(elem) {
    return `<div class="topic bottomBorder" onclick="redirect(${elem.id})">
                <section class="question" >
                    <h1 class="commentHeader">${elem.title}</h1>
                    <p class="comment">${elem.content}</p>
                    ${getTags(elem)}
                </section>
            <aside class="statusBars">
                <div class="viewsCount">${elem.viewCount}</div>
                <div class="answersCount">${elem.answerCount}</div>
                <div class="votesCount">${elem.votesCount}</div>
            </aside>`
}