exports.serviceTest = function (){
    var response = svc.http.get({
        url: "https://postman-echo.com/get",
        params: {
            queryVal: "1234"
        },
        headers: {
            key: "123"
        },
        forceDownload: false,
        downloadSync: false,
        fileName: "",
        fullResponse: false,
        connectionTimeout: "5000",
        readTimeout: "60000",
        defaultCallback: false
    });
    return JSON.stringify(response);
}

exports.serviceTest2 = function (){
    var response = dependencies.http.get({
        url: "https://postman-echo.com/get",
        params: {
            queryVal: "1234"
        },
        headers: {
            key: "123"
        },
        forceDownload: false,
        downloadSync: false,
        fileName: "",
        fullResponse: false,
        connectionTimeout: "5000",
        readTimeout: "60000",
        defaultCallback: false
    });
    return JSON.stringify(response);
}
exports.getTheConfig = function () {
    return  config.get();
}
exports.getConfigParam = function (param) {
    return  config.get(param);
}