chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({"highlight": false}, function() {
        console.log("Highlight mode is currently turned off. Click the button to toggle it on.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
            })
            ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});