let postApi = 'https://jsonplaceholder.typicode.com/todos/1/photos';

fetch(postApi)
    .then(function (response) {
        return response.json();
    })
    .then(function(posts){
        let html = posts.map(function(post) {
            return `<li>
                        <h2>${post.title}</h2>
                        <img src="${post.thumbnailUrl}" alt="">
                    </li>`;
        })
        htmls=html.join('');
        document.getElementById('post-block').innerHTML = htmls;
    })
    .catch(function (err) {
        console.log('err 404');
    });