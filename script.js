
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  } 


  for (let i = 55; i >= 20; i--) {
    console.log(i);
  } 


  const numbers = [3, 5, 11, 2, 8, 1, 6];

  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  } 


  const numbers = [3, 5, 11, 2, 8, 1, 6];
  const numbers_squared = [];
  
  for (let i = 0; i < numbers.length; i++) {
    numbers_squared.push(numbers[i] ** 2);
  }
    console.log(numbers_squared);


    const user = {
        first_name: 'Ivan', 
        last_name: 'Ivanov', 
        age: 20, 
        salary: 500
      }
      const user_info = `User's name is ${user.first_name} ${user.last_name}. 
      He is ${user.age} years old.`;

      console.log(user_info);