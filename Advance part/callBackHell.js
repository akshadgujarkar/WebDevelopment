

function makeHttpRequest(method,url,callback){

    const xhr = new XMLHttpRequest()
    xhr.responseText = 'json'
    xhr.addEventListener('load',()=>{
        callback(xhr.response)
    })

    xhr.open(method,url)
    xhr.send()
}

// 1st API responce data is dependent on 2nd API request and so on

makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {

  console.log(JSON.parse(usersData));
    makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
      makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.post[0].id}`, (commentsData) => {
        makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comment[0].user.id}`, (userData) => {
          console.log(userData);
        });
      });
    });
  })