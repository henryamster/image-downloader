chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'downloadImages') {
    let count = 0;
    request.urls.forEach((url) => {
      let filename = "image" + count + ".jpg";
      chrome.downloads.download({url: url, filename: filename});
      count++;
    });
  }
});

