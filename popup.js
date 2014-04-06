chrome.tabs.onActivated.addListener(function( activeInfo ){
  var windowId = activeInfo.windowId;

  chrome.tabs.captureVisibleTab(windowId, undefined, function( blob ){
    if( blob == undefined ) return;

    var f = document.createElement( "img" );

    f.src = blob;

    f = null;
    blob = null;
  });
});
