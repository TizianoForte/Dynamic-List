const ul = document.querySelector("ul");
const text = [];

renderList();

function renderList() {
  ul.innerText = "";
  for (const n of text) {
    const li = document.createElement("li");
    li.innerText = n;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", function() {
      const index = text.indexOf(n);
      text.splice(index, 1);
      renderList();
    });
    li.appendChild(button);
    ul.appendChild(li);
  }
}

btn.onclick = function() {
  text.unshift(insert.value);
  renderList();
  insert.value = "";
}
