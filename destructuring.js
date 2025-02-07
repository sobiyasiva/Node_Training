const person = {
    username: 'Alice',
    age: 30,
    city: 'New York'
  };

  const { username, age } = person;
  
  console.log(username); 
  console.log(age);  

  
  const numbers = [10, 20, 30];

const [first, second] = numbers;

console.log(first);  
console.log(second); 

const greeting = 'Hello';
const [firstChar, secondChar ,thirdChar] = greeting;

console.log(firstChar);  
console.log(secondChar);
console.log(thirdChar); 


//for objects the values will be assigned based on property names but for arrays and strings values will be determined based on positions like [0],[1] etc
//if we give names other than the mentioned property it will show as not-defined