export default class rest {
    get(link, id = '') {
        return fetch(`${link}/${id}`)
            .then(response => response.json())
            .then(data => data)
    };
    post(link, obj) {
        return fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    }
    put(link, obj, id) {
        return fetch(`${link}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    }
    delete(link, id) {
        fetch(`${link}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

