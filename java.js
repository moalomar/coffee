function Welcome() {
    alert("\nConsider yourself a member, congratulations. \n \n Rules: \n1- You do not talk about coffee Club. \n2- YOU DO NOT TALK ABOUT COFFEE CLUB.");
}

function doFirst() {
    cap = document.getElementById('cap');
    cap.addEventListener("dragstart", startDrag, false);
    cap.addEventListener("dragend", endDrag, false);
    DropBox = document.getElementById('DropBox'),
    DropBox.addEventListener("dragenter", dragenter, false);
    DropBox.addEventListener("dragleave", dragleave, false);
    DropBox.addEventListener("dragover", function(e) {e.preventDefault()}, false);
    DropBox.addEventListener("drop", dropped, false);
}

function endDrag(e) {
    pic = e.target;
    pic.style.visibility = 'hidden';
}

function dragenter(e) {
    e.preventDefault();
}

function dragleave(e) {
    e.preventDefault();
}

function startDrag(e) {
    var code = '<img src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps37407_THE1213734_37407_WEB.jpg">';
    e.dataTransfer.setData('text', code);
}

function dropped(e) {
    e.preventDefault();
    DropBox.innerHTML = e.dataTransfer.getData('Text');
}


window.addEventListener("load", doFirst, false);