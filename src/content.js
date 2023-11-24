chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "downloadImages") {
    let urls = Array.from(document.querySelectorAll(request.selector)).map(
      (img) => img.src
    );
    chrome.runtime.sendMessage({ action: "downloadImages", urls: urls });
  }
});
