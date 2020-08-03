(async function () {
    await fetch('http://localhost:3000/posts').then(response => response.json())
        .then(data => {
            const thread = document.getElementById('questionThread');
            data.forEach(elem => {
                const questionBox = document.createElement('div');
                questionBox.classList= 'topic bottomBorder';
                const section = document.createElement('section');
                section.classList = 'question';
                const title = document.createElement('h1');
                title.textContent = elem.title;
                title.classList = 'commentHeader';
                const comment = document.createElement('p');
                comment.textContent = elem.content;
                comment.classList = 'comment';
                section.append(title);
                section.append(comment);
                elem.tags.forEach(tag => {
                    const tagBox = document.createElement('p');
                    tagBox.textContent = tag;
                    tagBox.classList = 'tag';
                    section.append(tagBox);
                })
                questionBox.append(section);
                const statusBars = document.createElement('aside');
                statusBars.classList = 'statusBars';
                const views = document.createElement('div');
                const answers = document.createElement('div');
                const votes = document.createElement('div');
                views.classList = 'viewsCount';
                views.textContent = elem.viewCount;
                statusBars.append(views);
                answers.classList = 'answersCount';
                answers.textContent = elem.answerCount;
                statusBars.append(answers);
                votes.classList = 'votesCount';
                votes.textContent = elem.votesCount;
                statusBars.append(votes);
                questionBox.append(statusBars);
                thread.append(questionBox);
            })
        });
    
})()