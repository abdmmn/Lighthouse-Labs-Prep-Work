const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
//console.log(ingredients)

let i=0;
while (i < ingredients.length); {
    console.log(ingredients[0]);
  i++;  
} 
// Write a for loop that prints out the contents of ingredients:

for (i=0; i<ingredients.length; i++) {
    console.log(ingredients[i])
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (i=ingredients.length; i>=0; i--) {
    console.log(ingredients[i])
}