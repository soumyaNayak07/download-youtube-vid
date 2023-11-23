chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'download') {
      const videoInfo = getVideoInfo();
      
      if (videoInfo) {
        initiateDownload(videoInfo);
      } else {
        console.error('Error getting video information.');
      }
    }
  });
  
  function getVideoInfo() {
    const videoElement = document.querySelector('video');
  
    if (videoElement) {
      const videoUrl = videoElement.src;
      const videoTitle = document.title;
      
      return { url: videoUrl, title: videoTitle };
    } else {
      console.error('No video element found on the page.');
      return null;
    }
  }
  
  function initiateDownload(videoInfo) {
    chrome.downloads.download({
      url: videoInfo.url,
      filename: videoInfo.title + '.mp4',
      saveAs: false,
    }, function(downloadId) {
      console.log('Download initiated with ID:', downloadId);
    });
  }
  