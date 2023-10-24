document.getElementById("addBtn").onclick = function () {
    var container = document.getElementsByClassName("music-box");
    var section = document.getElementsByClassName("ttt");
    container.appendChild(section.cloneNode(true));
  };

document.getElementsByClassName('icon-images-delete').addEventListener('click', function() {
    var list = document.getElementsByClassName('music-box');
    if (list.children.length > 0) {  // Check if list is not empty
        list.removeChild(list.lastChild);  // Remove the last child of the <ul>
    }
});