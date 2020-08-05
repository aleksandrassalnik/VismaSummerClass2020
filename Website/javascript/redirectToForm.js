function Redirect(id) {
    if (id) {
        window.location = `./askQuestion.html?id=${id}`;
    } else window.location = './askQuestion.html';
}

