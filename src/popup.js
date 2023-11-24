document.addEventListener(
  "DOMContentLoaded",
  function () {
    var downloadForm = document.getElementById("download-form");
    if (downloadForm) {
      downloadForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let selector = document.getElementById("selector").value;
        chrome.tabs.query(
          { active: true, currentWindow: true },
          function (tabs) {
            chrome.scripting
              .executeScript({
                target: { tabId: tabs[0].id },
                function: function (params) {
                  let urls = Array.from(
                    document.querySelectorAll(params.selector)
                  ).map((img) => img.src);
                  return { action: "downloadImages", urls: urls };
                },
                args: [{ selector: selector }],
              })
              .then((results) => {
                chrome.runtime.sendMessage(results[0].result);
              });
          }
        );
      });
    }
  },
  false
);
