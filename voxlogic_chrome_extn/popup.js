
function getCurrentTabUrl(callback) {

  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {

    var tab = tabs[0];

    var url = tab.url;

    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });

}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

function postToREST(url,temp)
{
	 var x = new XMLHttpRequest();
 
  
  x.open('POST','http://localhost:9080/content')
 
  x.responseType = 'json';
  
    x.onload = function() {
   
    var response = x.response;
	
	renderStatus('Response : ' + JSON.stringify(response));

    
  };
  x.onerror = function() {
    renderStatus('Error..');
  };

  x.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  
  x.send(JSON.stringify({"webpage":url,"numbers":temp}));
}

function getNumbers(pattern,response){


			
			var patt = new RegExp(
                pattern,
                "g"
            );
    var temp = '';
	var i=0;
    while (match = patt.exec(response)) {
        if(i!=0)
			temp=","+ temp;
		temp = temp + match[0] ;
		i++;
    }	
	return temp;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    
    renderStatus('Performing search on... ' + url);
	
	
	
	var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url);
 
  
    xhttp.onload = function() {
    
    var response = xhttp.response;
	

	
			var temp=getNumbers("\\d{3} \\d{3} \\d{4}",response);
			var temp1=getNumbers("\\d{3}-\\d{3}-\\d{4}",response);
			
			var numArray = new Array(temp,temp1);
			
	renderStatus(url,numArray);
	

	postToREST(url,numArray);
    
  };
  xhttp.onerror = function() {
    renderStatus('Error..');
  };
  
  xhttp.send();	
    
  });
});
