//task1
const url = "https://jsonplaceholder.typicode.com/photos/101"

const putBtn = document.getElementById('putBtn');
const putText = document.getElementById('putText');
const putEmail = document.getElementById('putEmail');

function changeData(){
    fetch(url
    , {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({title: `${putText.value}, ${putEmail.value}`})
        }
    ).then(response => {
            if(response.ok){
                alert('Тема успешно изменена')
                return response.json()
               
                .then(data => {
                   for (let key in data);
                   console.log(data[key]);

                })
                
            }else{
                alert('Error: ' + response.status)
            }
})
}

putBtn.addEventListener('click', changeData);




//task2
const patchText = document.getElementById('patchText');
const patchBtn = document.getElementById('patchBtn');

function partialChange () {
    fetch(url
    ,{
        method: "PATCH",
        headers: {
                'Content-type': 'application/json'
                },
        body: JSON.stringify({url: `${patchText.value}`})
     
                
    }
).then(response => {
                if(response.ok){
                    alert('Тема частично изменена')
                    response.json()
                    .then(data => {
                        console.log(data);
                    })
                    
                }else{
                    alert('Error: ' + response.status)
                }
    })
}

patchBtn.addEventListener('click', partialChange);




//task3
const deleteBtn = document.getElementById('deleteBtn');
const caps = document.getElementById('caps');

function deleteItem () {
    fetch(url
        ,{
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(caps)
    
    }
    ).then(response => {
        if (response.ok){
            alert ('Товар успешно удален')
            response.json()
     .then(data => {
            console.log(data);
        })
        }else{
            alert('Error' + response.status)
        }
    })
}

deleteBtn.addEventListener('click', deleteItem);










































// [
//     {
//       "albumId": 1,
//       "id": 1,
//       "title": "accusamus beatae ad facilis cum similique qui sunt",
//       "url": "https://via.placeholder.com/600/92c952",
//       "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//     },




// const newPut = {
//     "albumId": 1,
//     "id": 101,
//     "title": 'Sezim',
//     "url": `${putText.value}, ${putEmail.value}`,
//     "thumbnailUrl": "https://dfsdfsd"
// }