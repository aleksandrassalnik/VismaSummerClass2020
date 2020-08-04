function Redirect() {
    if (this.id) {
        window.location = `./askQuestion.html?id=${this.id}`;
    } else window.location = './askQuestion.html';
}

