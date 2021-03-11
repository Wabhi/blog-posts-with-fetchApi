const postSection = document.querySelector('#posts');
const postTemplate = document.querySelector('#post-template')

async function getPost() {
    const postStream = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postStream.json();
    //console.log(posts);
    posts.forEach((post) => {
        let i = 0;
        i++;
        if (i <= 10) {
            const title = post.title;
            const body = post.body;
            fetch('https://unsplash.it/300/200')
                .then(res => res.blob())
                .then(blob => {

                    const newPost = document.importNode(postTemplate.content, true);
                    const postTitle = newPost.querySelector('.post-title');
                    const postBody = newPost.querySelector('.post-body');
                    const postImg = newPost.querySelector('.img-post');

                    postImg.src = URL.createObjectURL(blob);
                    postTitle.innerText = title;
                    postBody.innerText = body;
                    postSection.appendChild(newPost);
                })
                .catch(err => console.log(err));
        }
    })
}
getPost();
