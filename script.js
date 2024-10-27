//your code here!
const container = document.getElementById("infi-list");
function addListItem(){
	const elem=document.createElement("li");
	elem.textContent=`item ${container.children.length +1}`
	container.appendChild(elem);
}
for (let i = 0; i < 10; i++) {
    addListItem();
}
container.addEventListener("scroll", () => {
    if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        // Add items when reaching the bottom
        for (let i = 0; i < 2; i++) { // Load a few items at a time
            addListItem();
        }
    }
});