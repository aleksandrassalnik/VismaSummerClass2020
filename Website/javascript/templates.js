const template = {
    question: (elem) => {
        return `<div class="topic bottomBorder" onclick="redirect(${elem.id})">
        <section class="question" >
        <h1 class="commentHeader">${elem.title}</h1>
        <p class="comment">${elem.content}</p>
         ${template.tags(elem)}
        </section>
        <aside class="statusBars">
        <div class="viewsCount">${elem.viewCount}</div>
        <div class="answersCount">${elem.answerCount}</div>
        <div class="votesCount">${elem.votesCount}</div>
        </aside>`;
    },
    tags: (elem) => {
        let tags = '';
        elem.tags.forEach(tag => {
            tags += `<p class="tag">${tag}</p>`;
        })
        return tags;
    },
    deleteButton: `<button id="delete" type="button">Delete</button>`
};

export default template;