document.getElementById("myForm").addEventListener("submit",function(e){
  e.preventDefault();

  const formData = new FormData(this);
  const inputValue = formData.get('myInput');
  console.log("Input value:",inputValue)
})