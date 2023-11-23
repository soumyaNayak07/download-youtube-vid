document.addEventListener('DOMContentLoaded', function() {
  var downloadButton = document.getElementById('downloadButton');
  downloadButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const currentTab = tabs[0];
      const originalUrl = currentTab.url;
  
      // Replace "youtube" with "000tube" in the URL
      const modifiedUrl = originalUrl.replace(/youtube/g, '000tube');
  
      // Open the modified URL in a new tab
      chrome.tabs.create({ url: modifiedUrl });
    });
  });
  
});
