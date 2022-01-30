let XmlHttpRequest = require('xhr2');

function makeAjaxCall(methodType, url, callback, async = true, data = null) {

    let xhr = new XmlHttpRequest();

    xhr.onreadystatechange = function() {
        console.log("State changed event called. Ready state :" + xhr.readyState + ", Status :" + xhr.status);

        if (xhr.readyState == 4) {
            if (xhr.status === 200 || xhr.status === 201) {
                callback(xhr.responseText);
            } else if (xhr.status >= 400) {
                console.log("Handled 400 Client error or 500 server error");
            }
        }
    }

    xhr.open(methodType, url, async);
    if (data) {
        console.log(JSON.stringify(data));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
    } else {
        xhr.send();
    }
    console.log(methodType + " request sent to the server");
}


const getUrl = "http://127.0.0.1:5500/employee/1";

function getUserDetails(data) {
    console.log("Get User Data : " + data);
}

makeAjaxCall('GET', getUrl, getUserDetails);