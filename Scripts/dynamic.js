let colorarr = ["red", "aqua", "chocolate", "darkgoldenrod", "darkslategrey", "orange", "plum", "purple"];

let ul = document.createElement("ul");

for (let i= 0; i < colorarr.length; i ++) {
    let li = document.createElement("li");
    li.innerText = colorarr[i];
    li.style.color = colorarr[i];
    ul.appendChild(li);
}
document.body.appendChild(ul);

