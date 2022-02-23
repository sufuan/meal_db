function getname() {
    const searchInput = document.getElementById('search-input').value
    console.log(searchInput);

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))


}

const displayMeals = meals => {



    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div')
        div.classList.add('col-lg-3')

        div.innerHTML =
            ` <div   class="card">
          <img onclick="mealDetails(${meal.idMeal})" src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
           </div>
        </div>`


        document.getElementById('display').appendChild(div)
    })
}

const mealDetails = (mealId) => {
    const detailsUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}
   `
    fetch(detailsUrl)
        .then(res => res.json())
        .then(data => showMealDetails(data.meals[0]))
}

const showMealDetails = (detailsMeals) => {
    console.log(detailsMeals);

    const div = document.createElement('div')
    div.innerHTML = `
     
     <img width="200px" src="${detailsMeals.strMealThumb}" class="card-img" alt="...">
     <div class="card-img-overlay">
       <h5 class="card-title">${detailsMeals.strMeal}</h5>
       <p class="card-text">${detailsMeals.strInstructions}</p>
     </div>
      `

    document.getElementById('show-meal-details').appendChild(div)
}