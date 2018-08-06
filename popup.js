let highlight = document.getElementById("highlight");

highlight.onclick = function() {
    chrome.storage.sync.get("highlight", function(element) {
        chrome.storage.sync.set({"highlight" : (!element.highlight)}, function() {
            let header = document.getElementById("header");
            header.innerText = element.highlight;
            if (element.highlight) {
                document.getElementById("highlight").style.backgroundColor = "#54E871";

                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    chrome.tabs.executeScript(
                        tabs[0].id,
                        {file : "createTag.js" }
                    );
                });
                console.log("create");
            } else {
                document.getElementById("highlight").style.backgroundColor = "#F05656";
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    chrome.tabs.executeScript(
                        tabs[0].id,
                        {file : "removeTag.js" }
                    );
                });
                console.log("remove");
            }
        });
    });
};