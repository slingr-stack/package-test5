service.connectUser = function (message) {
    debugger;
    var config = message.config;
    var redirectUri = config.redirect_uri;
    var scope = encodeURIComponent('openid offline_access ' + config.scope.replace(/;/g, ' '));
    var url = 'https://login.microsoftonline.com/'+config.tenantId+'/oauth2/v2.0/authorize?client_id='+config.clientId+'&response_type=code&redirect_uri='+encodeURIComponent(redirectUri)+'&response_mode=query&scope='+scope;
    var win = window.open(url, 'Authorization page', 'toolbar=no,scrollbars=no,location=no,statusbar=no,menubar=no,resizable=0,width=500,height=600,left='+((screen.width/2)-250)+',top='+((screen.height/2)-250)+',');
    var intervalFn = function () {
        try {
            if (!win || !win.location) {
                window.clearInterval(pollTimer);
            } else {
                if (win.location.href.indexOf('/authCallback') != -1) {
                    win.innerWidth = 100;
                    win.innerHeight = 100;
                    win.screenX = screen.width;
                    win.screenY = screen.height;
                    window.clearInterval(pollTimer);
                    url = win.location.href;
                    var pos = url.indexOf('code=');
                    var token;
                    if (pos > -1) {
                        var endIndex = url.indexOf('&', pos);
                        if (endIndex === -1) {
                            endIndex = url.length;
                        }
                        token = url.substring(pos + 5, endIndex);
                        config.code = token;
                        service.callback(message, 'userConnected', config);
                    }
                }
                try {
                    win.close();
                } catch (e) {
                }
            }
        } catch (e) {
        }
    };

    var pollTimer = window.setInterval(function() {intervalFn.apply(self);}, 500);

};

service.function1 = function(message) {
    console.log('function1',message);
};

