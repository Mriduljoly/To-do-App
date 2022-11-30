function ajax(){ 
fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) => response.json())
.then((json) => json.forEach(tableElements)
)

function tableElements (element, index, arr){
  arr[index] = document.getElementById("data-output").innerHTML +=
  `<tr>
      <td>${element.userId}</td>
      <td>${element.id}</td>
      <td>${element.title}</td>
      <td>${element.body}</td>
  </tr>`
}
}