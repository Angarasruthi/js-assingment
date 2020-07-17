document.write(`<h1>string methods</h1>`)
var text="  Hi Iam Sruthi and I done my betch and I am from cse background."
console.group('String Methods')
console.log(text)
console.log(text.trim());
console.log(text.substring(9,15));
console.log(text.charCodeAt(6))//returns ascii value of the letter in 6
 console.log(text.charAt(6))
 console.log(text.concat("How are you"))
  console.log(text.endsWith('m',49))
  console.log(text.sub())
  console.log(text.search('b'))
  console.log(text.split('and',3))
  console.log(text.startsWith('b',30))
  console.log(text.small())//font size is small
  console.log(text.big())//big font size
  console.log(text.italics())
  console.log(text.bold())
  console.log(text.constructor)//shows function of the variable
 console.log(text.fontsize(35))
 console.groupEnd('String Methods')


 document.write(`<h1>Array Methods</h1>`)
 let a=['Sruthi','Suku',[1,2,3],]
 console.group('Array Method')
 a.forEach(function(item, index) {
    console.log(item, index)
 })
    console.log(a.shift())
    console.log(a)
console.log(a.indexOf([1,2,3]))
var b=a.splice(1,2)//Remove an item by index position
console.log(b)//shows the removed item
console.log(a)//shows array after removing the items
console.log(a.length)
console.log(a.push('Uma','Rao'))//add item at the end of an array
console.log(a[1])
// console.log(a.sort(a:'suku'|number))
console.log(a.unshift('sruthi'))// Add an item to the beginning of an Array
console.log(a)
console.groupEnd('Array Methods')  


 document.write(`<mark>if else</mark>`)

console.group('if else')
let age=Number(prompt('what is your age',0))
if( age>=20){
   console.log('can drink')
}
else{
   console.log('cannot drink')
}
console.groupEnd('if else')