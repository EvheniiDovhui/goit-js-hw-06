const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2");
  const subCategories = item.querySelectorAll("ul li");
  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${subCategories.length}`);
});
