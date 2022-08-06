/function displayFunction() {   

   let user1 ={
      'name': 'kamau',
      'email': 'kamau@gmail.com',
      'password':'12345678'
   }

   document.getElementById('submit').value;

   if(user1.username === 'kamau' && user1.email === 'kamaunjoroge@gmail.com' && user1.password === '12345678')  {
       window.location.assign('todo.html');
    } else {
       alert("input values do not match");
    }
   
}

