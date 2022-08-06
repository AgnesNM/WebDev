function displayFunction() {   

   let users = {

      user1: {
         'name': 'kamau',
         'email': 'kamau@gmail.com',
         'password':'12345678'
      },


      user2 :  {
         'name': 'rich',
         'email': 'rich@gmail.com',
         'password':'23456789'
      
      },


      user3 : {
         'name': 'njeri',
         'email': 'njeri@gmail.com',
         'password':'345678910'
      }

   }


   document.getElementById('submit').value;

   let {user1, user2, user3 } = users;

   if(user1.name === 'kamau' && user1.email === 'kamau@gmail.com' && user1.password === '12345678')  {
       window.location.assign('todo.html');
    } 

   else if(user2.name === 'rich' && user2.email === 'rich@gmail.com' && user2.password === '23456789')  {
      window.location.assign('todo.html');
   } 
   

   else if(user3.name === 'njeri' && user3.email === 'njeri@gmail.com' && user3.password === '345678910')  {
      window.location.assign('todo.html');
   } 
   
   else {
      alert("input values do not match");
   }
};

