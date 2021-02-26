 const btn=document.querySelector('.btn');
            const myresult=document.querySelector('.myresult');
            btn.addEvenListener('click'()=>{
                const options={
                    method:'POST',
                    body:JSON.stringify({
    "userId": 3,
    "id": 43,
    "title": "tempore ut sint quis recusandae",
    "completed": true
                    })
                     headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }
  // Делаем запрос за данными
  fetch('https://jsonplaceholder.typicode.com/users/3/todos', options)
    .then(response => response.json())
    .then(json => console.log(json))
});
          