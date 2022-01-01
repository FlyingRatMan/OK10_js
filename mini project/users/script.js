const url = new URL(window.location.href);
const urlUserId = url.searchParams.get('user_id');

fetch(`https://jsonplaceholder.typicode.com/users/${urlUserId}`)
    .then(response => response.json())
    .then(user => {
        for (const userKey in user) {
            const userDiv = document.createElement('div');

            if (userKey !== 'address' && userKey !== 'company') {
                const userElem = document.createElement('div');
                userElem.append(userKey + ': ' + user[userKey]);
                userDiv.append(userElem);
            }
            if (userKey === 'address') {
                for (const addressKey in user.address) {
                    if (addressKey !== 'geo') {
                        const addressElem = document.createElement('div');
                        addressElem.append(addressKey + ': ' + user.address[addressKey]);
                        userDiv.append(addressElem);
                    }
                    if (addressKey === 'geo') {
                        for (const geoKey in user.address.geo) {
                            const geoElem = document.createElement('div');
                            geoElem.append(geoKey + ': ' + user.address.geo[geoKey]);
                            userDiv.append(geoElem);
                        }
                    }
                }
            }
            if (userKey === 'company') {
                for (const companyKey in user.company) {
                    const companyElem = document.createElement('div');
                    companyElem.append('company ' + companyKey + ': ' + user.company[companyKey]);
                    userDiv.append(companyElem);
                }
            }

            document.body.append(userDiv);
        }

        const postsBtn = document.createElement('button');
        postsBtn.append('Posts of current user');

        postsBtn.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${urlUserId}/posts`)
                .then(response => response.json())
                .then(posts => {
                    const postsDiv = document.createElement('div');

                    for (const post of posts) {
                        const postTitle = document.createElement('h4');
                        postTitle.append(post.title);
                        const postBtn = document.createElement('button');
                        const btnLink = document.createElement('a');
                        btnLink.setAttribute('href', `../posts/post-details.html?post_id=${post.id}`);
                        btnLink.append('Show details');
                        postBtn.append(btnLink);

                        postsDiv.append(postTitle, postBtn);
                    }
                    document.body.append(postsDiv);
                })
        }

        document.body.append(postsBtn);
    })