const listFilterLinks = listLinks.list;

console.log("list", listFilterLinks);

function filterListLink() {
  const testFilter = [];

  for (let item of listFilterLinks) {
    testFilter.push(item.title.toLowerCase());
    console.log(item);
  }

  testFilter.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
}
filterListLink();

const triez = document.getElementById("input-trie-alpha");
console.log(triez);

triez.addEventListener("change", () => {
  if (triez.value === "A-Z") {
    filterListLink();
  }
});
