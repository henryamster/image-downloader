function downloadFile(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = url.split("/").pop();
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        resolve();
      })
      .catch(reject);
  });
}

function downloadFiles(urls) {
  return Promise.all(urls.map(downloadFile));
}

export { downloadFile, downloadFiles };
