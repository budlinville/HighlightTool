var newScriptTag = document.createElement('script');
newScriptTag.innerHTML = `
$(document).on("mouseup", function (e) {
    var selected = getSelection();
    if (selected != '') {
        var range = selected.getRangeAt(0);
        console.log(range);
        if(selected.toString().length > 1){
            var newNode = document.createElement("span");
            newNode.setAttribute("class", "red");
            range.surroundContents(newNode);
        }
        selected.removeAllRanges();
    } else {
        console.log("UH OH");
    }
 });

function getSelection() {
    var seltxt = '';
     /*if (window.getSelection) {
         seltxt = window.getSelection();
     } else */if (document.getSelection) {
         seltxt = document.getSelection();
     } else if (document.selection) {
         seltxt = document.selection.createRange().text;
     }
    else return;
    return seltxt;
}
`;

//TODO have attribute ID names randomized. If there is already an attribute with this ID name, we will have bugs
newScriptTag.setAttribute('id', 'aabaabaa');

var jqueryScriptTag = document.createElement('script');
jqueryScriptTag.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js');
jqueryScriptTag.setAttribute('id', 'wwbwwui');


document.head.appendChild(newScriptTag);
document.head.appendChild(jqueryScriptTag);

console.log("create");