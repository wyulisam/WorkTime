chrome.browserAction.onClicked.addListener(function(a){var b="http://co-msk-app02/Personal";if(window.location){chrome.tabs.create({url:b})}else{window.open(b,"_self")}});