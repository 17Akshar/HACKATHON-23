async function fetchfood(){
  // var ingredient = [];
  // fetch("http://localhost:3000/food")
  // .then((response) => response.json())
  // .then((data) => data.forEach((data)=>{
  //   //console.log(data.RecipeIngredientParts)
  //   ingredient.push(data.RecipeIngredientParts)
  // }));
  // console.log(ingredient);
  // console.log(ingredient[0])
  const response = await fetch('http://localhost:3000/food')
  return await response.json();
}
var ingredient = []
fetchfood().then((data)=>{
  data.forEach((data)=>{
    ingredient.push(data.RecipeIngredientParts)
  })
  // var array = ingredient[0].split(" ");
  // var result = array[1].replace("'\'",String.Empty)
  // console.log(result);
  var array = []
  ingredient.forEach((data)=>{
    // console.log(data);
    array.push(data.split(" "));
  })
  var new_arr = []
  array.forEach((data)=>{
    data.forEach((ele)=>{
      new_arr.push(ele.replace("'\'",String.empty));  
    })
  })
  console.log(new_arr)

})
function search(){
  var search = document.getElementById("search").value;
  console.log(search)
}


 