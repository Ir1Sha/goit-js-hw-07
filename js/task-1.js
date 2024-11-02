const categories = document.querySelectorAll(".item");
    console.table("Number of catogories:", categories.length);

categories.forEach((category) => {
    const title = category.querySelector("h2").textContent;
    console.table("Category:", title);

const items = category.querySelectorAll("ul li");
    console.table("Elements:", items.length);
});

