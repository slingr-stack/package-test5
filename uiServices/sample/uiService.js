uiService.processMessage = function(message) {
    switch (message.name) {
        case 'event1':
            var config = {};
            var scopes = 'offline_access;https://api.gmelius.com/public/auth/sequences/enroll;https://api.gmelius.com/public/auth/conversations/read;https://api.gmelius.com/public/auth/conversations/metadata;https://api.gmelius.com/public/auth/conversations/insert;https://api.gmelius.com/public/auth/boards/read;https://api.gmelius.com/public/auth/boards/modify';
            var redirectUri = 'redirectUri';
            var codeChallenge = 'XkZXWx_vlPZEOD_iCTBejVMsERlEhTS7JfrH5P1y6AM';
            var codeVerifier = 'ykzczDS4Z4Ezlfzu8kiXqqTvBQHOmJ2YW1uzBNT1nJiC7BcDvol0Pnh7eCzejRAzhmb1JL15CYddf58irMDJkFj4WnIaTRBxWbHgDOdZwH4Pa9lS9ERTYjadDgrR';
            var url = 'https://gmelius.io/oauth/authorize?client_id=' + 'aaaa' + '&code_challenge=' + codeChallenge + '&scope=' + scopes + '&redirect_uri=' + redirectUri;
            var win = window.open(url, 'Authorization page', 'toolbar=no,scrollbars=no,location=no,statusbar=no,menubar=no,resizable=0,width=500,height=600,left=' + ((screen.width / 2) - 250) + ',top=' + ((screen.height / 2) - 250) + ',');
            var self = this;
            var intervalFn = function () {
                try {
                    if (!win || !win.location) {
                        window.clearInterval(pollTimer);
                    } else {
                        if (win.location.href.indexOf('/callback') != -1) {
                            win.innerWidth = 100;
                            win.innerHeight = 100;
                            win.screenX = screen.width;
                            win.screenY = screen.height;
                            window.clearInterval(pollTimer);
                            url = win.location.href;
                            var pos = url.indexOf('code=');
                            var token
                            if(pos > -1) {
                                token = url.substring(pos + 5);
                                config.authorizationCode = token;
                                config.codeVerifier = codeVerifier;
                                config.codeChallenge = codeChallenge;
                                uiService.callback(message, 'userConnected', config);
                            }
                        }
                        try { win.close(); } catch (e) { }
                    }
                } catch (e) {}
            };
            var pollTimer = window.setInterval(function () { intervalFn.apply(self) }, 500);          break;
        case 'event2':
            console.log('Hanled event2');
            break;
        case 'event3':
            // do something
            console.log('Hanled event');
            break;
    }
};

uiService.showToken = function() {
    console.warn(uiService.configuration.token);
};

uiService.showPlaces = function() {
    console.warn(plugin.places);
};