const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const appId = '2HegXGAJvSI3tejgKGxF';
const endPoint = '/books/';
const postUrl = `${url + appId + endPoint}`;
const requestBody = {
 item_id: body.id,
 title: body.title,
 author: body.author,
 category: body.category
}
const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(requestBody)
  }
console.log(postUrl);

const getBookFromApi = async () => {
  const res = await fetch(postUrl, {
   method: 'GET'
  }).catch(error=> error.message)
  const data = await res.json()
  const books = Object.keys(data).map(key=> ({
    id: key,
    title: data[key][0].title,
    author: data[key][0].author,
    category: data[key][0].category,
    progress: Math.floor(Math.random() * 101),
  }))
  return books
};



const postApi = async (book) => {
  const response = await fetch(postUrl, options).catch(error=> error.message)
};

const deleteBookFromApi = (id) => {
await fetch(postUrl + id,{
method: 'DELETE'
}).catch(error=> error.message)
};

module.exports = { postApi, getBookFromApi, deleteBookFromApi}
