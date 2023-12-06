const form = document.getElementById('myForm');
const input = document.getElementById("myInput")
form.addEventListener("submit",function(e){
  e.preventDefault()
  
  const formData = new FormData(form);
  console.log(formData.get("myInput"))
  console.log(formData)
})  