"use strict"

let array = ["end", "of", "podcast", 4]
array.forEach (element =>  console.log(element))

for (let e in array)
{
    console.log(array[e])
}

/* Without nodejs installed */
let temp =""
array.forEach (element => {
    temp += element + " "
})
console.log(temp)

let temp2 =""
for (let e in array)
{
    temp2 += array[e]+ " "
}
console.log(temp2) 

/* with nodejs installed
array.forEach (element =>   process.stdout.write(element + " "))
process.stdout.write("\n")

for (let e in array)
{
    process.stdout.write(array[e]+ " ")
}
process.stdout.write("\n")
*/

console.dir(window.navigator);

console.log(window.screenX + ", " + window.screenY);
console.log(window.innerWidth + ", " + window.innerHeight);

console.dir(window.history);

window.history.back(); // haha