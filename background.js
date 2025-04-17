chrome.tabs.onCreated.addListener(updateBadge);
chrome.tabs.onRemoved.addListener(updateBadge);

function updateBadge() {
  chrome.tabs.query({}, (tabs) => {
    const count = tabs.length.toString();
    chrome.action.setBadgeText({ text: count });
    chrome.action.setBadgeBackgroundColor({ color: "#0000FF" });
  });
}

// Set initial count
updateBadge();
