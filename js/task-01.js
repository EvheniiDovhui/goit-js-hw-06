const allCategories = document.getElementById("categories").children.length;
console.log(`Number of categories: ${allCategories}`);

const titlesCategories = document.querySelectorAll("h2");
titlesCategories.forEach((title) => {
  console.log("Category:", title.textContent);
  console.log("Elements:", title.nextElementSibling.children.length);
});
