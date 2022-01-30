let XmlHttpRequest = require('xhr2');

function makePromiseCall(methodType, url, async = true, data = null) {

    alert("Hello");
    return new Promise(function(resolve, reject) {
        let xhr = new XmlHttpRequest();

        xhr.onload = function() {
            console.log("State changed event called. Ready state :" + xhr.readyState + ", Status :" + xhr.status);
            console.log("URL : " + url);
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status <= 299) {
                    resolve(xhr.responseText);
                } else if (xhr.status >= 300) {
                    reject({
                        status: xhr.status,
                        statusMsg: xhr.statusText
                    });
                }
            }
        }
        xhr.onerror = function() {
            reject({
                status: this.status,
                statusMsg: xhr.statusText
            });
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
    });
}