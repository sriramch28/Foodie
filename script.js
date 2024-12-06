
document.getElementById('searchBar').addEventListener('input', (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const recipes = document.querySelectorAll('.recipe');
    
    recipes.forEach(recipe => {
        const recipeText = recipe.textContent.toLowerCase();
        if (recipeText.includes(searchQuery)) {
            recipe.style.display = 'flex';
        } else {
            recipe.style.display = 'none';
        }
    });
});





// function goToPage() {
//             window.location.href = "login.html"
// }


// document.getElementById('loginButton').addEventListener('click', () => {
//     alert('Login feature coming soon!');
// });

// document.getElementById('savedRecipesButton').addEventListener('click', () => {
//     alert('Saved recipes feature coming soon!');
// });

