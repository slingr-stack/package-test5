/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

/****************************************************
 Helpers
 ****************************************************/

exports.sites = {};

exports.sites.permissions = {};

exports.sites.lists = {};

exports.me = {};

exports.me.followedSites = {};

exports.users = {};

exports.users.followedSites = {};

exports.users.followedSites.add = {};

exports.users.followedSites.remove = {};

exports.sites.columns = {};

exports.sites.contentTypes = {};

exports.sites.getApplicableContentTypesForList = {};

exports.sites.sites = {};

exports.sites.operations = {};

exports.sites.getAllSites = {};

exports.sites.lists.items = {};

exports.sites.lists.columns = {};

exports.sites.lists.contentTypes = {};

exports.sites.lists.contentTypes.addCopy = {};

exports.sites.lists.operations = {};

exports.sites.contentTypes.columns = {};

exports.sites.lists.contentTypes.columns = {};

exports.sites.contentTypes.isPublished = {};

exports.sites.contentTypes.publish = {};

exports.sites.contentTypes.unpublish = {};

exports.sites.lists.contentTypes.addCopyFromContentTypeHub = {};

exports.sites.contentTypes.addCopyFromContentTypeHub = {};

exports.sites.contentTypes.associateWithHubSites = {};

exports.sites.contentTypes.copyToDefaultContentLocation = {};

exports.sites.lists.contentTypes.column = {};

exports.sites.lists.contentTypes.getCompatibleHubContentTypes = {};

exports.sites.contentTypes.getCompatibleHubContentTypes = {};

exports.sites.lists.items.fields = {};

exports.sites.items = {};

exports.sites.items.versions = {};

exports.sites.lists.items.versions = {};

exports.sites.analytics = {};

exports.sites.analytics.allTime = {};

exports.sites.lists.items.analytics = {};

exports.sites.lists.items.analytics.allTime = {};

exports.drives = {};

exports.drives.items = {};

exports.drives.items.analytics = {};

exports.drives.items.analytics.lastSevenDays = {};

exports.sites.analytics.lastSevenDays = {};

exports.sites.lists.items.analytics.lastSevenDays = {};

exports.sites.lists.items.documentSetVersions = {};

exports.sites.lists.items.documentSetVersions.restore = {};

exports.sites.termStore = {};

exports.sites.termStore.groups = {};

exports.sites.termStore.groups.sets = {};

exports.sites.termStore.sets = {};

exports.sites.termStore.sets.children = {};

exports.sites.termStore.sets.terms = {};

exports.sites.termStore.sets.terms.children = {};

exports.sites.termStore.groups.sets.terms = {};

exports.sites.termStore.sets.relations = {};

exports.sites.termStore.sets.terms.relations = {};

exports.admin = {};

exports.admin.sharepoint = {};

exports.admin.sharepoint.settings = {};

exports.sites.permissions.get = function (sitesId, permissionId, httpOptions) {
    if (!httpOptions) {
        for (var i = 0; i < arguments.length; i++) {
            if (isObject(arguments[i])) {
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch (httpOptions ? arguments.length - 1 : arguments.length) {
        case 2:
            url = parse('/v1.0/sites/:sitesId/permissions/:permissionId', [sitesId, permissionId]);
            break;
        case 1:
            url = parse('/v1.0/sites/:sitesId/permissions', [sitesId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.permissions.post = function (sitesId, httpOptions) {
    if (!sitesId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [sitesId].');
        return;
    }
    var url = parse('/v1.0/sites/:sitesId/permissions', [sitesId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.permissions.patch = function (sitesId, permissionId, httpOptions) {
    if (!sitesId || !permissionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [sitesId,permissionId].');
        return;
    }
    var url = parse('/v1.0/sites/:sitesId/permissions/:permissionId', [sitesId, permissionId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.patch, Sharepoint(options));
};

exports.sites.get = function (hostname, siteRelativePath, httpOptions) {
    if (!httpOptions) {
        for (var i = 0; i < arguments.length; i++) {
            if (isObject(arguments[i])) {
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch (httpOptions ? arguments.length - 1 : arguments.length) {
        case 2:
            url = parse('/v1.0/sites/:hostname/:site-relative-path', [hostname, siteRelativePath]);
            break;
        case 0:
            url = parse('/v1.0/sites');
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.lists.get = function (siteId, listId, httpOptions) {
    if (!httpOptions) {
        for (var i = 0; i < arguments.length; i++) {
            if (isObject(arguments[i])) {
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch (httpOptions ? arguments.length - 1 : arguments.length) {
        case 1:
            url = parse('/v1.0/sites/:site-id/lists', [siteId]);
            break;
        case 2:
            url = parse('/v1.0/sites/:site-id/lists/:list-id', [siteId, listId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.me.followedSites.get = function (httpOptions) {
    var url = parse('/v1.0/me/followedSites');
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.users.followedSites.add.post = function (userId, httpOptions) {
    if (!userId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userId].');
        return;
    }
    var url = parse('/v1.0/users/:user-id/followedSites/add', [userId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.users.followedSites.remove.post = function (userId, httpOptions) {
    if (!userId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userId].');
        return;
    }
    var url = parse('/v1.0/users/:user-id/followedSites/remove', [userId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.columns.get = function (siteId, columnId, httpOptions) {
    if (!httpOptions) {
        for (var i = 0; i < arguments.length; i++) {
            if (isObject(arguments[i])) {
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch (httpOptions ? arguments.length - 1 : arguments.length) {
        case 1:
            url = parse('/v1.0/sites/:site-id/columns', [siteId]);
            break;
        case 2:
            url = parse('/v1.0/sites/:site-id/columns/:column-id', [siteId, columnId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.columns.post = function (siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/columns', [siteId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.contentTypes.get = function (siteId, contentTypeId, httpOptions) {
    if (!httpOptions) {
        for (var i = 0; i < arguments.length; i++) {
            if (isObject(arguments[i])) {
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch (httpOptions ? arguments.length - 1 : arguments.length) {
        case 1:
            url = parse('/v1.0/sites/:site-id/contentTypes', [siteId]);
            break;
        case 2:
            url = parse('/v1.0/sites/:site-id/contentTypes/:contentType-id', [siteId, contentTypeId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.contentTypes.post = function (siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/contentTypes', [siteId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.getApplicableContentTypesForList.get = function (siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/getApplicableContentTypesForList', [siteId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.lists.post = function (siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists', [siteId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.sites.get = function (siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/sites', [siteId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.operations.get = function (siteId, richLongRunningOperationID, httpOptions) {
    if (!httpOptions) {
        for (var i = 0; i < arguments.length; i++) {
            if (isObject(arguments[i])) {
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch (httpOptions ? arguments.length - 1 : arguments.length) {
        case 1:
            url = parse('/v1.0/sites/:siteId/operations', [siteId]);
            break;
        case 2:
            url = parse('/v1.0/sites/:siteId/operations/:richLongRunningOperation-ID', [siteId, richLongRunningOperationID]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.getAllSites.get = function (httpOptions) {
    var url = parse('/v1.0/sites/getAllSites');
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.lists.items.get = function (siteId, listId, itemId, httpOptions) {
    if (!httpOptions) {
        for (var i = 0; i < arguments.length; i++) {
            if (isObject(arguments[i])) {
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch (httpOptions ? arguments.length - 1 : arguments.length) {
        case 2:
            url = parse('/v1.0/sites/:site-id/lists/:list-id/items', [siteId, listId]);
            break;
        case 3:
            url = parse('/v1.0/sites/:site-id/lists/:list-id/items/:item-id', [siteId, listId, itemId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.lists.columns.get = function (siteId, listId, columnId, httpOptions) {
    if (!httpOptions) {
        for (var i = 0; i < arguments.length; i++) {
            if (isObject(arguments[i])) {
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch (httpOptions ? arguments.length - 1 : arguments.length) {
        case 2:
            url = parse('/v1.0/sites/:site-id/lists/:list-id/columns', [siteId, listId]);
            break;
        case 3:
            url = parse('/v1.0/sites/:site-id/lists/:list-id/columns/:column-id', [siteId, listId, columnId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.lists.columns.post = function (siteId, listId, httpOptions) {
    if (!siteId || !listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/columns', [siteId, listId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.lists.contentTypes.get = function (siteId, listId, contentTypeId, httpOptions) {
    if (!httpOptions) {
        for (var i = 0; i < arguments.length; i++) {
            if (isObject(arguments[i])) {
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch (httpOptions ? arguments.length - 1 : arguments.length) {
        case 2:
            url = parse('/v1.0/sites/:site-id/lists/:list-id/contentTypes', [siteId, listId]);
            break;
        case 3:
            url = parse('/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id', [siteId, listId, contentTypeId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.lists.contentTypes.addCopy.post = function (siteId, listId, httpOptions) {
    if (!siteId || !listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/contentTypes/addCopy', [siteId, listId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.lists.operations.get = function (siteId, listId, richLongRunningOperationID, httpOptions) {
    if (!httpOptions) {
        for (var i = 0; i < arguments.length; i++) {
            if (isObject(arguments[i])) {
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch (httpOptions ? arguments.length - 1 : arguments.length) {
        case 2:
            url = parse('/v1.0/sites/:siteId/lists/:listId/operations', [siteId, listId]);
            break;
        case 3:
            url = parse('/v1.0/sites/:siteId/lists/:listId/operations/:richLongRunningOperation-ID', [siteId, listId, richLongRunningOperationID]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.contentTypes.columns.get = function (siteId, contentTypeId, columnId, httpOptions) {
    if (!httpOptions) {
        for (var i = 0; i < arguments.length; i++) {
            if (isObject(arguments[i])) {
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch (httpOptions ? arguments.length - 1 : arguments.length) {
        case 3:
            url = parse('/v1.0/sites/:site-id/contentTypes/:contentType-id/columns/:column-id', [siteId, contentTypeId, columnId]);
            break;
        case 2:
            url = parse('/v1.0/sites/:site-id/contentTypes/:contentType-id/columns', [siteId, contentTypeId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.lists.contentTypes.columns.get = function (siteId, listId, contentTypeId, columnId, httpOptions) {
    if (!httpOptions) {
        for (var i = 0; i < arguments.length; i++) {
            if (isObject(arguments[i])) {
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch (httpOptions ? arguments.length - 1 : arguments.length) {
        case 4:
            url = parse('/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id/columns/:column-id', [siteId, listId, contentTypeId, columnId]);
            break;
        case 3:
            url = parse('/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id/columns', [siteId, listId, contentTypeId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.columns.patch = function (siteId, columnId, httpOptions) {
    if (!siteId || !columnId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,columnId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/columns/:column-id', [siteId, columnId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.patch, Sharepoint(options));
};

exports.sites.lists.columns.patch = function (siteId, listId, columnId, httpOptions) {
    if (!siteId || !listId || !columnId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,columnId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/columns/:column-id', [siteId, listId, columnId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.patch, Sharepoint(options));
};

exports.sites.contentTypes.columns.patch = function (siteId, contentTypeId, columnId, httpOptions) {
    if (!siteId || !contentTypeId || !columnId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,contentTypeId,columnId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/contentTypes/:contentType-id/columns/:column-id', [siteId, contentTypeId, columnId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.patch, Sharepoint(options));
};

exports.sites.lists.contentTypes.columns.patch = function (siteId, listId, contentTypeId, columnId, httpOptions) {
    if (!siteId || !listId || !contentTypeId || !columnId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,contentTypeId,columnId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id/columns/:column-id', [siteId, listId, contentTypeId, columnId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.patch, Sharepoint(options));
};

exports.sites.columns.delete = function (siteId, columnId, httpOptions) {
    if (!siteId || !columnId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,columnId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/columns/:column-id', [siteId, columnId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.delete, Sharepoint(options));
};

exports.sites.lists.columns.delete = function (siteId, listId, columnId, httpOptions) {
    if (!siteId || !listId || !columnId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,columnId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/columns/:column-id', [siteId, listId, columnId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.delete, Sharepoint(options));
};

exports.sites.contentTypes.columns.delete = function (siteId, contentTypeId, columnId, httpOptions) {
    if (!siteId || !contentTypeId || !columnId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,contentTypeId,columnId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/contentTypes/:contentType-id/columns/:column-id', [siteId, contentTypeId, columnId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.delete, Sharepoint(options));
};

exports.sites.lists.contentTypes.columns.delete = function (siteId, listId, contentTypeId, columnId, httpOptions) {
    if (!siteId || !listId || !contentTypeId || !columnId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,contentTypeId,columnId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id/columns/:column-id', [siteId, listId, contentTypeId, columnId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.delete, Sharepoint(options));
};

exports.sites.contentTypes.patch = function (siteId, contentTypeId, httpOptions) {
    if (!siteId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/contentTypes/:contentType-id', [siteId, contentTypeId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.patch, Sharepoint(options));
};

exports.sites.lists.contentTypes.patch = function (siteId, listId, contentTypeId, httpOptions) {
    if (!siteId || !listId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id', [siteId, listId, contentTypeId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.patch, Sharepoint(options));
};

exports.sites.contentTypes.delete = function (siteId, contentTypeId, httpOptions) {
    if (!siteId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/contentTypes/:contentType-id', [siteId, contentTypeId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.delete, Sharepoint(options));
};

exports.sites.lists.contentTypes.delete = function (siteId, listId, contentTypeId, httpOptions) {
    if (!siteId || !listId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id', [siteId, listId, contentTypeId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.delete, Sharepoint(options));
};

exports.sites.contentTypes.isPublished.get = function (siteId, contentTypeId, httpOptions) {
    if (!siteId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/contentTypes/:contentTypeId/isPublished', [siteId, contentTypeId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.contentTypes.publish.post = function (siteId, contentTypeId, httpOptions) {
    if (!siteId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/contentTypes/:contentTypeId/publish', [siteId, contentTypeId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.contentTypes.unpublish.post = function (siteId, contentTypeId, httpOptions) {
    if (!siteId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/contentTypes/:contentTypeId/unpublish', [siteId, contentTypeId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.lists.contentTypes.addCopyFromContentTypeHub.post = function (siteId, listId, httpOptions) {
    if (!siteId || !listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/lists/:listId/contentTypes/addCopyFromContentTypeHub', [siteId, listId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.contentTypes.addCopyFromContentTypeHub.post = function (siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/contentTypes/addCopyFromContentTypeHub', [siteId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.contentTypes.associateWithHubSites.post = function (siteId, contentTypeId, httpOptions) {
    if (!siteId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/contentTypes/:contentTypeId/associateWithHubSites', [siteId, contentTypeId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.contentTypes.copyToDefaultContentLocation.post = function (siteId, contentTypeId, httpOptions) {
    if (!siteId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/contentTypes/:contentTypeId/copyToDefaultContentLocation', [siteId, contentTypeId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.contentTypes.columns.post = function (siteId, contentTypeId, httpOptions) {
    if (!siteId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/contentTypes/:contentType-id/columns', [siteId, contentTypeId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.lists.contentTypes.column.post = function (siteId, listId, contentTypeId, httpOptions) {
    if (!siteId || !listId || !contentTypeId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,contentTypeId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id/column', [siteId, listId, contentTypeId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.lists.contentTypes.getCompatibleHubContentTypes.get = function (siteId, listId, httpOptions) {
    if (!siteId || !listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/lists/:listId/contentTypes/getCompatibleHubContentTypes', [siteId, listId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.contentTypes.getCompatibleHubContentTypes.get = function (siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/contentTypes/getCompatibleHubContentTypes', [siteId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.lists.items.post = function (siteId, listId, httpOptions) {
    if (!siteId || !listId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/items', [siteId, listId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.lists.items.patch = function (siteId, listId, itemId, httpOptions) {
    if (!siteId || !listId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,itemId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/items/:item-id', [siteId, listId, itemId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.patch, Sharepoint(options));
};

exports.sites.lists.items.fields.patch = function (siteId, listId, itemId, httpOptions) {
    if (!siteId || !listId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,itemId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/items/:item-id/fields', [siteId, listId, itemId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.patch, Sharepoint(options));
};

exports.sites.lists.items.delete = function (siteId, listId, itemId, httpOptions) {
    if (!siteId || !listId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,itemId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/items/:item-id', [siteId, listId, itemId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.delete, Sharepoint(options));
};

exports.sites.items.versions.get = function (siteId, itemId, httpOptions) {
    if (!siteId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,itemId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/items/:item-id/versions', [siteId, itemId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.lists.items.versions.get = function (siteId, listId, itemId, httpOptions) {
    if (!siteId || !listId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,itemId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/items/:item-id/versions', [siteId, listId, itemId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.analytics.allTime.get = function (siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/analytics/allTime', [siteId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.lists.items.analytics.allTime.get = function (siteId, listId, itemId, httpOptions) {
    if (!siteId || !listId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,itemId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/items/:item-id/analytics/allTime', [siteId, listId, itemId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.drives.items.analytics.lastSevenDays.get = function (driveId, itemId, httpOptions) {
    if (!driveId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [driveId,itemId].');
        return;
    }
    var url = parse('/v1.0/drives/:drive-id/items/:item-id/analytics/lastSevenDays', [driveId, itemId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.analytics.lastSevenDays.get = function (siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/analytics/lastSevenDays', [siteId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.lists.items.analytics.lastSevenDays.get = function (siteId, listId, itemId, httpOptions) {
    if (!siteId || !listId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,itemId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/lists/:list-id/items/:item-id/analytics/lastSevenDays', [siteId, listId, itemId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.lists.items.documentSetVersions.get = function (siteId, listId, itemId, documentSetVersionId, httpOptions) {
    if (!httpOptions) {
        for (var i = 0; i < arguments.length; i++) {
            if (isObject(arguments[i])) {
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch (httpOptions ? arguments.length - 1 : arguments.length) {
        case 3:
            url = parse('/v1.0/sites/:siteId/lists/:listId/items/:itemId/documentSetVersions', [siteId, listId, itemId]);
            break;
        case 4:
            url = parse('/v1.0/sites/:siteId/lists/:listId/items/:itemId/documentSetVersions/:documentSetVersionId', [siteId, listId, itemId, documentSetVersionId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.lists.items.documentSetVersions.post = function (siteId, listId, itemId, httpOptions) {
    if (!siteId || !listId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,itemId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/lists/:listId/items/:itemId/documentSetVersions', [siteId, listId, itemId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.lists.items.documentSetVersions.delete = function (siteId, listId, itemId, documentSetVersionId, httpOptions) {
    if (!siteId || !listId || !itemId || !documentSetVersionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,itemId,documentSetVersionId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/lists/:listId/items/:itemId/documentSetVersions/:documentSetVersionId', [siteId, listId, itemId, documentSetVersionId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.delete, Sharepoint(options));
};

exports.sites.lists.items.documentSetVersions.restore.post = function (siteId, listId, itemId, documentSetVersionId, httpOptions) {
    if (!siteId || !listId || !itemId || !documentSetVersionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,listId,itemId,documentSetVersionId].');
        return;
    }
    var url = parse('/v1.0/sites/:siteId/lists/:listId/items/:itemId/documentSetVersions/:documentSetVersionId/restore', [siteId, listId, itemId, documentSetVersionId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.termStore.get = function (siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore', [siteId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.termStore.patch = function (siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore', [siteId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.patch, Sharepoint(options));
};

exports.sites.termStore.groups.get = function (siteId, groupId, httpOptions) {
    if (!httpOptions) {
        for (var i = 0; i < arguments.length; i++) {
            if (isObject(arguments[i])) {
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch (httpOptions ? arguments.length - 1 : arguments.length) {
        case 1:
            url = parse('/v1.0/sites/:site-id/termStore/groups', [siteId]);
            break;
        case 2:
            url = parse('/v1.0/sites/:site-id/termStore/groups/:group-id', [siteId, groupId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.termStore.groups.post = function (siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/groups', [siteId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.termStore.groups.delete = function (siteId, groupId, httpOptions) {
    if (!siteId || !groupId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,groupId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/groups/:group-id', [siteId, groupId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.delete, Sharepoint(options));
};

exports.sites.termStore.groups.sets.get = function (siteId, groupId, httpOptions) {
    if (!siteId || !groupId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,groupId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/groups/:group-id/sets', [siteId, groupId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.termStore.sets.post = function (siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets', [siteId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.termStore.sets.get = function (siteId, setId, httpOptions) {
    if (!siteId || !setId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id', [siteId, setId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.termStore.sets.patch = function (siteId, setId, httpOptions) {
    if (!siteId || !setId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id', [siteId, setId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.patch, Sharepoint(options));
};

exports.sites.termStore.sets.delete = function (siteId, setId, httpOptions) {
    if (!siteId || !setId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id', [siteId, setId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.delete, Sharepoint(options));
};

exports.sites.termStore.sets.children.get = function (siteId, setId, httpOptions) {
    if (!siteId || !setId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id/children', [siteId, setId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.termStore.sets.terms.children.get = function (siteId, setId, termId, httpOptions) {
    if (!siteId || !setId || !termId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId,termId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id/children', [siteId, setId, termId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.termStore.sets.terms.children.post = function (siteId, setId, termId, httpOptions) {
    if (!siteId || !setId || !termId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId,termId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id/children', [siteId, setId, termId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.termStore.sets.children.post = function (siteId, setId, httpOptions) {
    if (!siteId || !setId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id/children', [siteId, setId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.sites.termStore.groups.sets.terms.get = function (siteId, groupId, setId, termId, httpOptions) {
    if (!siteId || !groupId || !setId || !termId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,groupId,setId,termId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/groups/:group-id/sets/:set-id/terms/:term-id', [siteId, groupId, setId, termId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.termStore.sets.terms.get = function (siteId, setId, termId, httpOptions) {
    if (!siteId || !setId || !termId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId,termId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id', [siteId, setId, termId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.termStore.sets.terms.patch = function (siteId, setId, termId, httpOptions) {
    if (!siteId || !setId || !termId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId,termId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id', [siteId, setId, termId]);
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.patch, Sharepoint(options));
};

exports.sites.termStore.sets.terms.delete = function (siteId, setId, termId, httpOptions) {
    if (!siteId || !setId || !termId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId,termId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id', [siteId, setId, termId]);
    sys.logs.debug('[sharepoint] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.delete, Sharepoint(options));
};

exports.sites.termStore.sets.relations.get = function (siteId, setId, httpOptions) {
    if (!siteId || !setId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id/relations', [siteId, setId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.termStore.sets.terms.relations.get = function (siteId, setId, termId, httpOptions) {
    if (!siteId || !setId || !termId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId,termId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id/relations', [siteId, setId, termId]);
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.sites.termStore.sets.terms.relations.post = function (siteId, setId, termId, httpOptions) {
    if (!siteId || !setId || !termId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,setId,termId].');
        return;
    }
    var url = parse('/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id/relations', [siteId, setId, termId]);
    sys.logs.debug('[sharepoint] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options));
};

exports.admin.sharepoint.settings.get = function (httpOptions) {
    var url = parse('/v1.0/admin/sharepoint/settings');
    sys.logs.debug('[sharepoint] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options));
};

exports.admin.sharepoint.settings.patch = function (httpOptions) {
    var url = parse('/v1.0/admin/sharepoint/settings');
    sys.logs.debug('[sharepoint] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.patch, Sharepoint(options));
};

/****************************************************
 Public API - Generic Functions
 ****************************************************/

exports.get = function (url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.get, Sharepoint(options), callbackData, callbacks);
};

exports.post = function (url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.post, Sharepoint(options), callbackData, callbacks);
};

exports.put = function (url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.put, Sharepoint(options), callbackData, callbacks);
};

exports.patch = function (url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.patch, Sharepoint(options), callbackData, callbacks);
};

exports.delete = function (url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.delete, Sharepoint(options), callbackData, callbacks);
};

exports.head = function (url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.head, Sharepoint(options), callbackData, callbacks);
};

exports.options = function (url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return handleRequestWithRetry(httpService.options, Sharepoint(options), callbackData, callbacks);
};

exports.utils = {};

exports.utils.parseTimestamp = function (dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

exports.utils.formatTimestamp = function (date) {
    if (!date) {
        return null;
    }
    var pad = function (number) {
        var r = String(number);
        if (r.length === 1) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad(date.getUTCMonth() + 1)
        + '-' + pad(date.getUTCDate())
        + 'T' + pad(date.getUTCHours())
        + ':' + pad(date.getUTCMinutes())
        + ':' + pad(date.getUTCSeconds())
        + '.' + String((date.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5)
        + 'Z';
};

exports.utils.fromDateToTimestamp = function (params) {
    if (!!params) {
        return {timestamp: new Date(params).getTime()};
    }
    return null;
};

exports.utils.fromMillisToDate = function (params) {
    if (!!params) {
        var sdf = new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'UTC'
        });
        return {date: sdf.format(new Date(parseInt(params)))};
    }
    return null;
};

/****************************************************
 Private helpers
 ****************************************************/

var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
}

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
}

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

var stringType = Function.prototype.call.bind(Object.prototype.toString)

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}

/****************************************************
 oauth
 ****************************************************/
exports.getAccessToken = function () {
    return dependencies.oauth.functions.connectUser('sharepoint-outh:userConnected');
}

function handleRequestWithRetry(requestFn, options, callbackData, callbacks) {
    sys.logs.info("Call function handleRequestWithRetry");
    try {
        return requestFn(options, callbackData, callbacks);
    } catch (error) {
        sys.logs.error(JSON.stringify(error));
        dependencies.oauth.functions.refreshToken();
        return requestFn(setAuthorization(options), callbackData, callbacks);
    }
}

/****************************************************
 Constants
 ****************************************************/

var SHAREPOINT_API_BASE_URL = "https://graph.microsoft.com"; // TODO: Set the base url
var API_URL = SHAREPOINT_API_BASE_URL + ""; // TODO: Set the base url for the api

/****************************************************
 Configurator
 ****************************************************/

var Sharepoint = function (options) {
    options = options || {};
    options = setApiUri(options);
    options = setRequestHeaders(options);
    options = setAuthorization(options);
    return options;
}

/****************************************************
 Private API
 ****************************************************/

function setApiUri(options) {
    var url = options.path || "";
    options.url = API_URL + url;
    sys.logs.debug('[sharepoint] Set url: ' + options.path + "->" + options.url);
    delete options.path;
    return options;
}

function setRequestHeaders(options) {
    var headers = options.headers || {};
    headers = mergeJSON(headers, {"Content-Type": "application/json"});
    options.headers = headers;
    return options;
}

function setAuthorization(options) {
    var authorization = options.authorization || {};
    authorization = mergeJSON(authorization, {
        type: "oauth2",
        accessToken: sys.storage.get(config.get("oauth").id + ' - access_token'),
        headerPrefix: "Bearer"
    });
    options.authorization = authorization;
    return options;
}

function mergeJSON(json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if (json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if (json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}