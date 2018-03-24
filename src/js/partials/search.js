var buttonSearch = document.querySelector(".button-search"),
    search = document.querySelector(".search"),
    searchButton = document.querySelector(".search-button");

buttonSearch.addEventListener("click", function() {
  search.classList.toggle("search-active");
});
