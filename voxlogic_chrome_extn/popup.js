// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });

  // Most methods of the Chrome extension APIs are asynchronous. This means that
  // you CANNOT do something like this:
  //
  // var url;
  // chrome.tabs.query(queryInfo, function(tabs) {
  //   url = tabs[0].url;
  // });
  // alert(url); // Shows "undefined", because chrome.tabs.query is async.
}

/**
 * @param {string} searchTerm - Search term for Google Image search.
 * @param {function(string,number,number)} callback - Called when an image has
 *   been found. The callback gets the URL, width and height of the image.
 * @param {function(string)} errorCallback - Called when the image is not found.
 *   The callback gets a string that describes the failure reason.
 */
function getImageUrl(searchTerm, callback, errorCallback) {
  // Google image search - 100 searches per day.
  // https://developers.google.com/image-search/
  var searchUrl = 'http://localhost:9080/content';
  var x = new XMLHttpRequest();
  x.open('GET', searchUrl);
  // The Google image search API responds with JSON, so let Chrome parse it.
  x.responseType = 'json';
  x.onload = function() {
    // Parse and process the response from Google Image Search.
    var response = x.response;
    if (!response || !response.responseData || !response.responseData.results ||
        response.responseData.results.length === 0) {
      errorCallback(response+'--No response from Google Image search!');
      return;
    }
    var firstResult = response.responseData.results[0];
	alert(firstResult);
    // Take the thumbnail instead of the full image to get an approximately
    // consistent image size.
  /*  var imageUrl = firstResult.tbUrl;
    var width = parseInt(firstResult.tbWidth);
    var height = parseInt(firstResult.tbHeight);
    console.assert(
        typeof imageUrl == 'string' && !isNaN(width) && !isNaN(height),
        'Unexpected respose from the Google Image Search API!');
    callback(imageUrl, width, height);*/
  };
  x.onerror = function() {
    errorCallback('Network error.');
  };
  x.send();
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

function postToREST()
{
	 var x = new XMLHttpRequest();
  //x.open('GET', url);
  
  x.open('POST','http://localhost:9080/content')
  // The Google image search API responds with JSON, so let Chrome parse it.
  x.responseType = 'json';
  
    x.onload = function() {
    // Parse and process the response from Google Image Search.
    var response = x.response;
	//console.log(JSON.stringify(response));
	//renderStatus('Response : ' + response);
	renderStatus('Response : ' + JSON.stringify(response));
	//renderStatus('Response : ' + response.results[0]);
    
  };
  x.onerror = function() {
    renderStatus('Error..');
  };
  //x.send();
  x.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  
  x.send(JSON.stringify({"webpage":"http://wwww.test12345.com","numbers":["09876543431","1234567890"]}));
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    // Put the image URL in Google search.
    renderStatus('Performing... ' + url);
	
	//searchUrl = 'http://www.google.com';
	
	var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url);
  
  // The Google image search API responds with JSON, so let Chrome parse it.
  //xhttp.responseType = 'json';
  
    xhttp.onload = function() {
    // Parse and process the response from Google Image Search.
    var response = xhttp.response;
	
	//var phonenum=response.match(^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$);
	//renderStatus('Response Stackoverflow : ' + phonenum);
	
	//POST Data
	postToREST();
    
  };
  xhttp.onerror = function() {
    renderStatus('Error..');
  };
  //x.send();
  //xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  
  xhttp.send();
  
	
    
  });
});
