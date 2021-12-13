// 1.
// Отримати відповідь з цього ресурсу, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         return response.json();
//     })
//     .then(posts => {
//         const wrap = document.createElement('div');
//         wrap.classList.add('wrap');
//         document.body.classList.add('all');
//
//         for (const post of posts) {
//             const postDiv = document.createElement('div');
//             postDiv.classList.add('post');
//
//             const postID = document.createElement('h4');
//             const postTitle = document.createElement('h5');
//             const postBody = document.createElement('p');
//             postID.append(`ID: ${post.id};`);
//             postTitle.append(`Title: ${post.title}`);
//             postBody.append(`Body: ${post.body}`);
//
//             postDiv.append(postID, postTitle, postBody);
//
//             wrap.append(postDiv);
//         }
//         document.body.append(wrap);
//     })

// 2.
// Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
        return response.json();
    })
    .then(comments => {
        const wrap = document.createElement('div');
        wrap.classList.add('wrap');

        for (const comment of comments) {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');

            const commentID = document.createElement('h4');
            const commentName = document.createElement('h5');
            const commentEmail = document.createElement('h5');
            const commentBody = document.createElement('p');
            commentID.append(`ID: ${comment.id};`);
            commentName.append(`Title: ${comment.name}`);
            commentEmail.append(`Title: ${comment.email}`);
            commentBody.append(`Body: ${comment.body}`);

            commentDiv.append(commentID, commentName, commentEmail, commentBody);

            wrap.append(commentDiv);
        }
        document.body.append(wrap);
    })