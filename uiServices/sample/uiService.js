uiService.processMessage = function(message) {
    switch (message.name) {
        case 'event1':
            // do something
            sys.ws.get('/data/companies/'+message.data.companyId).then(function (result) {
                sys.ws.post('/status/logs', {
                    type: 'EXTERNAL',
                    level: 'INFO',
                    message: 'Record ABC found',
                    additionalInfo : {
                        record: JSON.stringify(result)
                    }
                });
                uiService.callback(message, 'callback1', {record: result ? JSON.stringify(result) : null});
            }, function (error) {
                sys.ws.post('/status/logs', {
                    type: 'EXTERNAL',
                    level: 'WARN',
                    message: 'Record ABC not found',
                    additionalInfo : {
                        error: error.toString()
                    }
                });
            });

            break;
        case 'event2':
            console.log("Hanled event2");
            break;
        case 'event3':
            // do something
            console.log("Hanled event3");
            break;
    }
};

uiService.showToken = function() {
    console.warn(uiService.configuration.token);
};

uiService.showPlaces = function() {
    console.warn(uiService.places);
};
