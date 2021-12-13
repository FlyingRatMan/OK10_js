// 1.
// Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
        const wrap = document.createElement('div');
        wrap.classList.add('wrap');
        document.body.classList.add('all');

        for (const post of posts) {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            const postID = document.createElement('h4');
            const postTitle = document.createElement('h5');
            const postBody = document.createElement('p');
            postID.append(`ID: ${post.id}`);
            postTitle.append(`Title: ${post.title}`);
            postBody.append(`Body: ${post.body}`);

            const btn = document.createElement('button');
            btn.append('Show comments');
            postDiv.append(postID, postTitle, postBody, btn);
            wrap.append(postDiv);
            btn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(response => {
                        return response.json();
                    })
                    .then(comments => {
                        for (const comment of comments) {
                            const commentDiv = document.createElement('div');

                            const commentID = document.createElement('h4');
                            const commentName = document.createElement('h5');
                            const commentEmail = document.createElement('h5');
                            const commentBody = document.createElement('p');
                            commentID.append(`ID: ${comment.id};`);
                            commentName.append(`Title: ${comment.name}`);
                            commentEmail.append(`Title: ${comment.email}`);
                            commentBody.append(`Body: ${comment.body}`);

                            commentDiv.append(commentID, commentName, commentEmail, commentBody);
                            postDiv.append(commentDiv);
                        }
                    });
            }
        }
        document.body.append(wrap);
    });