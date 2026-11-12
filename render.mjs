export const render = function(user){

 const card = `
    <div class="card" style="width: 18rem;">
      <img src="${user.avatar}" class="card-img-top" alt="${user.first_name}">
      <div class="card-body">
        <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
        <p class="card-text">${user.email}</p>
      </div>
    </div>
  `;

  return card;
} 
