chrome.tabs.onActivated.addListener(function( activeInfo ){
  var windowId = activeInfo.windowId;

  chrome.tabs.captureVisibleTab(windowId, undefined , function(blob){
    blob = null;
  });
});
