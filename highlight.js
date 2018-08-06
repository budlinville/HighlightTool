$(document).on("mouseup", function (e) {
    //if (getHighlightEnabled()) {
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
    //}
 });

function getSelection() {
    var seltxt = '';
     if (window.getSelection) {
         seltxt = window.getSelection();
     } else if (document.getSelection) {
         seltxt = document.getSelection();
     } else if (document.selection) {
         seltxt = document.selection.createRange().text;
     }
    else return;
    return seltxt;
}

function getHighlightEnabled() {
    let ret = false;
    chrome.storage.sync.get("highlight", function(element) {
        ret = element.highlight;
    }
    return ret;
}