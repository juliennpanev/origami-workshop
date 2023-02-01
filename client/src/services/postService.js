import api from "./api";

function getAll() {
    return fetch(api.posts)
        .then(res => res.json())
        .catch(error => console.log('Handled error ' + error))
}

export default {
    getAll,
}