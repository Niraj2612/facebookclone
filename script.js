// const xhr = new XMLHttpRequest();
// const url = 'https://jsonplaceholder.typicode.com/posts/1'



// xhr.open('GET', url);
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log(typeof xhr.responseText);
//     }
// }

// const api = fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(res => (res.json))
// .then(out => console.log(out.parse))

// request = new XMLHttpRequest;
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
// span = document.querySelector('span')



// request.onload = function() {
//   if (request.status >= 200 && request.status < 400){

//     const data = JSON.parse(request.responseText);
//     bodyText = data.body;
//     console.log(bodyText);
//     document.querySelector('btn').addEventListener( "click", function() {
//         span.innerHTML = bodyText;
//     })

//   } else {
//     console.log(`error loading the url`);

//   }
// };

// request.onerror = function() {
//   console.log(`connection error`);
// };

// request.send();

const btn = document.querySelector('.login')
const url = 'https://jsonplaceholder.typicode.com/posts/1'

btn.addEventListener('click', async () => {
    const data = await fetch(url)
    const response = await data.json()
    btn.innerHTML = response.body;
})

    