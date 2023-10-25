const moviesArray = movies.slice(0, 151);
const pokemonArray = pokemons.slice(0, 151)

const elList = document.querySelector(".list")
const elMoviesBtn = document.querySelector(".movies__btn");
const elPokemonBtn = document.querySelector(".pokemon__btn");
const elBothBtn = document.querySelector(".both__btn");
const elClearBtn = document.querySelector(".clear__btn");
const elPokeonLogo = document.querySelector(".pokemon__logo");
const elMoviesLogo = document.querySelector(".movies__logo");
const elResult = document.querySelector(".result");

elPokemonBtn.addEventListener("click", function() {
    renderArray(pokemonArray);
    elPokeonLogo.style = "display: block";
    elMoviesLogo.style = "display: none"
})

elMoviesBtn.addEventListener("click", function() {
    renderArray(moviesArray);
    elPokeonLogo.style = "display: none";
    elMoviesLogo.style = "display: block"
})

elBothBtn.addEventListener("click", function() {
    const newBothArray = pokemonArray.concat(moviesArray);
    renderArray(newBothArray)
    elPokeonLogo.style = "display: block";
    elMoviesLogo.style = "display: block"
});

elClearBtn.addEventListener("click", function() {
    elList.innerHTML = null;
    elResult.textContent = 0
    elPokeonLogo.style = "display: none";
    elMoviesLogo.style = "display: none"
})

function renderArray(array) {
    elList.innerHTML = null;
    elResult.textContent = array.length
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        
        const newLi = document.createElement("li");
        newLi.classList.add("mb-2", "align-items-center" ,"d-flex" ,"flex-column","justify-content-center", "mb-3", "bg-light", "rounded-5", "shadow-lg", "p-5",)

        const newImg = document.createElement("img");
        newLi.appendChild(newImg);
       
        const newH3 = document.createElement("h3");
        newLi.appendChild(newH3);

        const newP = document.createElement("p");
        newLi.appendChild(newP);
        newP.textContent = item.type;
        newP.style.marginBottom = "10px";

        const newP2 = document.createElement("p");
        newLi.appendChild(newP2);
        newP2.textContent = item.height;
        newP2.style.marginBottom = "10px";

        const newP3 = document.createElement("p");
        newLi.appendChild(newP3);
        newP3.textContent = item.weight;
        
        if (item.name) {
            newImg.src = item.img;
            newImg.style.width = "250px";
            newImg.style.marginBottom = "10px";

            newH3.textContent = item.name;
            newH3.style.marginBottom = "10px";
        }else{
            newImg.src = `https://i.ytimg.com/vi/${item.ytid}/mqdefault.jpg`;
            newImg.style.width = "250px";

            const newTitle = document.createElement("h3");
            newLi.appendChild(newTitle);
            newTitle.textContent = item.language;
            newTitle.style.marginBottom = "10px";

            const newYear = document.createElement("p");
            newLi.appendChild(newYear);
            newYear.textContent = item.movie_year;
            newYear.style.marginBottom = "10px";

            const newRating = document.createElement("p");
            newLi.appendChild(newRating);
            newRating.textContent = item.imdb_rating;
            newRating.style.marginBottom = "10px";

            const newA = document.createElement("a");
            newLi.appendChild(newA);
            newA.textContent = "Watch trailer"
            newA.href = "https://youtube.com";
            newA.classList.add("link1");

            const newA2 = document.createElement("a");
            newLi.appendChild(newA2);
            newA2.textContent = "Bookmark";
            newA2.href = "https://youtube.com";
            newA2.classList.add("link2");

            const newA3 = document.createElement("a");
            newLi.appendChild(newA3)
            newA3.textContent = "More info";
            newA3.href = "https://youtube.com";
            newA3.classList.add("link3");
        }

        elList.appendChild(newLi)
    }
}