var savedComments = Load();
for (var index = 0; index < savedComments.length; index++) {
    var savedComment = savedComment[index];
    Show(savedComment);
}

function Show(commment) {
    var div = document.createElement("div");
    div.innerHTML = commment;
    comments.appendChild(div);
}

function Save(comment) {

}

function Load() {
    var loadedComments = new Array();
    return loadedComments;
}