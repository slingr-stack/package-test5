# Javascript API

The Javascript API of the sharepoint endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `GET`,`POST`,`PATCH`,`DELETE` requests to the [sharepoint API](API_URL_HERE) like this:
```javascript
var response = pkg.sharepoint.get('/v1.0/sites/:siteId/operations/:richLongRunningOperation-ID')
var response = pkg.sharepoint.post('/v1.0/users/:user-id/followedSites/remove', body)
var response = pkg.sharepoint.post('/v1.0/users/:user-id/followedSites/remove')
var response = pkg.sharepoint.patch('/v1.0/sites/:site-id/termStore/sets/:set-id', body)
var response = pkg.sharepoint.patch('/v1.0/sites/:site-id/termStore/sets/:set-id')
var response = pkg.sharepoint.delete('/v1.0/sites/:site-id/termStore/groups/:group-id')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/v1.0/sites/:sitesId/permissions/:permissionId'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.permissions.get(sitesId)
```
---
* API URL: '/v1.0/sites/:sitesId/permissions'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.permissions.get()
```
---
* API URL: '/v1.0/sites/:hostname/:site-relative-path'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.get(hostname)
```
---
* API URL: '/v1.0/sites'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.get()
```
---
* API URL: '/v1.0/sites/:site-id/lists'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.lists.get()
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.lists.get(siteId)
```
---
* API URL: '/v1.0/me/followedSites'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.me.followedSites.get()
```
---
* API URL: '/v1.0/sites/:site-id/columns'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.columns.get()
```
---
* API URL: '/v1.0/sites/:site-id/columns/:column-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.columns.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/contentTypes'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.contentTypes.get()
```
---
* API URL: '/v1.0/sites/:site-id/contentTypes/:contentType-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.contentTypes.get(siteId)
```
---
* API URL: '/v1.0/sites/:siteId/getApplicableContentTypesForList'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.getApplicableContentTypesForList.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/sites'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.sites.get(siteId)
```
---
* API URL: '/v1.0/sites/:siteId/operations'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.operations.get()
```
---
* API URL: '/v1.0/sites/:siteId/operations/:richLongRunningOperation-ID'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.operations.get(siteId)
```
---
* API URL: '/v1.0/sites/getAllSites'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.getAllSites.get()
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/items'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.lists.items.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/items/:item-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.lists.items.get(siteId, listId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/columns'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.lists.columns.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/columns/:column-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.lists.columns.get(siteId, listId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/contentTypes'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.lists.contentTypes.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.lists.contentTypes.get(siteId, listId)
```
---
* API URL: '/v1.0/sites/:siteId/lists/:listId/operations'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.lists.operations.get(siteId)
```
---
* API URL: '/v1.0/sites/:siteId/lists/:listId/operations/:richLongRunningOperation-ID'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.lists.operations.get(siteId, listId)
```
---
* API URL: '/v1.0/sites/:site-id/contentTypes/:contentType-id/columns/:column-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.contentTypes.columns.get(siteId, contentTypeId)
```
---
* API URL: '/v1.0/sites/:site-id/contentTypes/:contentType-id/columns'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.contentTypes.columns.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id/columns/:column-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.lists.contentTypes.columns.get(siteId, listId, contentTypeId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id/columns'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.lists.contentTypes.columns.get(siteId, listId)
```
---
* API URL: '/v1.0/sites/:siteId/contentTypes/:contentTypeId/isPublished'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.contentTypes.isPublished.get(siteId, contentTypeId)
```
---
* API URL: '/v1.0/sites/:siteId/lists/:listId/contentTypes/getCompatibleHubContentTypes'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.lists.contentTypes.getCompatibleHubContentTypes.get(siteId, listId)
```
---
* API URL: '/v1.0/sites/:siteId/contentTypes/getCompatibleHubContentTypes'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.contentTypes.getCompatibleHubContentTypes.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/items/:item-id/versions'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.items.versions.get(siteId, itemId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/items/:item-id/versions'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.lists.items.versions.get(siteId, listId, itemId)
```
---
* API URL: '/v1.0/sites/:site-id/analytics/allTime'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.analytics.allTime.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/items/:item-id/analytics/allTime'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.lists.items.analytics.allTime.get(siteId, listId, itemId)
```
---
* API URL: '/v1.0/drives/:drive-id/items/:item-id/analytics/lastSevenDays'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.drives.items.analytics.lastSevenDays.get(driveId, itemId)
```
---
* API URL: '/v1.0/sites/:site-id/analytics/lastSevenDays'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.analytics.lastSevenDays.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/items/:item-id/analytics/lastSevenDays'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.lists.items.analytics.lastSevenDays.get(siteId, listId, itemId)
```
---
* API URL: '/v1.0/sites/:siteId/lists/:listId/items/:itemId/documentSetVersions'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.lists.items.documentSetVersions.get(siteId, listId)
```
---
* API URL: '/v1.0/sites/:siteId/lists/:listId/items/:itemId/documentSetVersions/:documentSetVersionId'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.lists.items.documentSetVersions.get(siteId, listId, itemId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.termStore.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/groups'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.termStore.groups.get()
```
---
* API URL: '/v1.0/sites/:site-id/termStore/groups/:group-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.termStore.groups.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/groups/:group-id/sets'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.termStore.groups.sets.get(siteId, groupId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.termStore.sets.get(siteId, setId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id/children'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.termStore.sets.children.get(siteId, setId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id/children'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.termStore.sets.terms.children.get(siteId, setId, termId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/groups/:group-id/sets/:set-id/terms/:term-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.termStore.groups.sets.terms.get(siteId, groupId, setId, termId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.termStore.sets.terms.get(siteId, setId, termId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id/relations'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.termStore.sets.relations.get(siteId, setId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id/relations'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.sites.termStore.sets.terms.relations.get(siteId, setId, termId)
```
---
* API URL: '/v1.0/admin/sharepoint/settings'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.admin.sharepoint.settings.get()
```
---
* API URL: '/v1.0/sites/:sitesId/permissions'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.permissions.post(sitesId, body)
```
---
* API URL: '/v1.0/users/:user-id/followedSites/add'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.users.followedSites.add.post(userId, body)
```
---
* API URL: '/v1.0/users/:user-id/followedSites/remove'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.users.followedSites.remove.post(userId, body)
```
---
* API URL: '/v1.0/sites/:site-id/columns'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.columns.post(siteId, body)
```
---
* API URL: '/v1.0/sites/:site-id/contentTypes'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.contentTypes.post(siteId, body)
```
---
* API URL: '/v1.0/sites/:site-id/lists'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.lists.post(siteId, body)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/columns'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.lists.columns.post(siteId, listId, body)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/contentTypes/addCopy'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.lists.contentTypes.addCopy.post(siteId, listId, body)
```
---
* API URL: '/v1.0/sites/:siteId/contentTypes/:contentTypeId/publish'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.contentTypes.publish.post(siteId, contentTypeId, body)
```
---
* API URL: '/v1.0/sites/:siteId/contentTypes/:contentTypeId/unpublish'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.contentTypes.unpublish.post(siteId, contentTypeId, body)
```
---
* API URL: '/v1.0/sites/:siteId/lists/:listId/contentTypes/addCopyFromContentTypeHub'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.lists.contentTypes.addCopyFromContentTypeHub.post(siteId, listId, body)
```
---
* API URL: '/v1.0/sites/:siteId/contentTypes/addCopyFromContentTypeHub'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.contentTypes.addCopyFromContentTypeHub.post(siteId, body)
```
---
* API URL: '/v1.0/sites/:siteId/contentTypes/:contentTypeId/associateWithHubSites'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.contentTypes.associateWithHubSites.post(siteId, contentTypeId, body)
```
---
* API URL: '/v1.0/sites/:siteId/contentTypes/:contentTypeId/copyToDefaultContentLocation'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.contentTypes.copyToDefaultContentLocation.post(siteId, contentTypeId, body)
```
---
* API URL: '/v1.0/sites/:site-id/contentTypes/:contentType-id/columns'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.contentTypes.columns.post(siteId, contentTypeId, body)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id/column'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.lists.contentTypes.column.post(siteId, listId, contentTypeId, body)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/items'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.lists.items.post(siteId, listId, body)
```
---
* API URL: '/v1.0/sites/:siteId/lists/:listId/items/:itemId/documentSetVersions'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.lists.items.documentSetVersions.post(siteId, listId, itemId, body)
```
---
* API URL: '/v1.0/sites/:siteId/lists/:listId/items/:itemId/documentSetVersions/:documentSetVersionId/restore'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.lists.items.documentSetVersions.restore.post(siteId, listId, itemId, documentSetVersionId, body)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/groups'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.termStore.groups.post(siteId, body)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.termStore.sets.post(siteId, body)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id/children'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.termStore.sets.terms.children.post(siteId, setId, termId, body)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id/children'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.termStore.sets.children.post(siteId, setId, body)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id/relations'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.sites.termStore.sets.terms.relations.post(siteId, setId, termId, body)
```
---
* API URL: '/v1.0/sites/:sitesId/permissions/:permissionId'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.sites.permissions.patch(sitesId, permissionId, body)
```
---
* API URL: '/v1.0/sites/:site-id/columns/:column-id'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.sites.columns.patch(siteId, columnId, body)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/columns/:column-id'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.sites.lists.columns.patch(siteId, listId, columnId, body)
```
---
* API URL: '/v1.0/sites/:site-id/contentTypes/:contentType-id/columns/:column-id'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.sites.contentTypes.columns.patch(siteId, contentTypeId, columnId, body)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id/columns/:column-id'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.sites.lists.contentTypes.columns.patch(siteId, listId, contentTypeId, columnId, body)
```
---
* API URL: '/v1.0/sites/:site-id/contentTypes/:contentType-id'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.sites.contentTypes.patch(siteId, contentTypeId, body)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.sites.lists.contentTypes.patch(siteId, listId, contentTypeId, body)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/items/:item-id'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.sites.lists.items.patch(siteId, listId, itemId, body)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/items/:item-id/fields'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.sites.lists.items.fields.patch(siteId, listId, itemId, body)
```
---
* API URL: '/v1.0/sites/:site-id/termStore'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.sites.termStore.patch(siteId, body)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.sites.termStore.sets.patch(siteId, setId, body)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.sites.termStore.sets.terms.patch(siteId, setId, termId, body)
```
---
* API URL: '/v1.0/admin/sharepoint/settings'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.admin.sharepoint.settings.patch(body)
```
---
* API URL: '/v1.0/sites/:site-id/columns/:column-id'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.sites.columns.delete(siteId, columnId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/columns/:column-id'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.sites.lists.columns.delete(siteId, listId, columnId)
```
---
* API URL: '/v1.0/sites/:site-id/contentTypes/:contentType-id/columns/:column-id'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.sites.contentTypes.columns.delete(siteId, contentTypeId, columnId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id/columns/:column-id'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.sites.lists.contentTypes.columns.delete(siteId, listId, contentTypeId, columnId)
```
---
* API URL: '/v1.0/sites/:site-id/contentTypes/:contentType-id'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.sites.contentTypes.delete(siteId, contentTypeId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.sites.lists.contentTypes.delete(siteId, listId, contentTypeId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/items/:item-id'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.sites.lists.items.delete(siteId, listId, itemId)
```
---
* API URL: '/v1.0/sites/:siteId/lists/:listId/items/:itemId/documentSetVersions/:documentSetVersionId'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.sites.lists.items.documentSetVersions.delete(siteId, listId, itemId, documentSetVersionId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/groups/:group-id'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.sites.termStore.groups.delete(siteId, groupId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.sites.termStore.sets.delete(siteId, setId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.sites.termStore.sets.terms.delete(siteId, setId, termId)
```
---

</details>
    
## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint: 
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>GET,POST,PATCH,DELETE</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/v1.0/sites/{sitesId}/permissions/{permissionId}<br>/v1.0/sites/{sitesId}/permissions<br>/v1.0/sites/{hostname}/{site-relative-path}<br>/v1.0/sites<br>/v1.0/sites/{site-id}/lists<br>/v1.0/sites/{site-id}/lists/{list-id}<br>/v1.0/me/followedSites<br>/v1.0/sites/{site-id}/columns<br>/v1.0/sites/{site-id}/columns/{column-id}<br>/v1.0/sites/{site-id}/contentTypes<br>/v1.0/sites/{site-id}/contentTypes/{contentType-id}<br>/v1.0/sites/{siteId}/getApplicableContentTypesForList<br>/v1.0/sites/{site-id}/sites<br>/v1.0/sites/{siteId}/operations<br>/v1.0/sites/{siteId}/operations/{richLongRunningOperation-ID}<br>/v1.0/sites/getAllSites<br>/v1.0/sites/{site-id}/lists/{list-id}/items<br>/v1.0/sites/{site-id}/lists/{list-id}/items/{item-id}<br>/v1.0/sites/{site-id}/lists/{list-id}/columns<br>/v1.0/sites/{site-id}/lists/{list-id}/columns/{column-id}<br>/v1.0/sites/{site-id}/lists/{list-id}/contentTypes<br>/v1.0/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}<br>/v1.0/sites/{siteId}/lists/{listId}/operations<br>/v1.0/sites/{siteId}/lists/{listId}/operations/{richLongRunningOperation-ID}<br>/v1.0/sites/{site-id}/contentTypes/{contentType-id}/columns/{column-id}<br>/v1.0/sites/{site-id}/contentTypes/{contentType-id}/columns<br>/v1.0/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns/{column-id}<br>/v1.0/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns<br>/v1.0/sites/{siteId}/contentTypes/{contentTypeId}/isPublished<br>/v1.0/sites/{siteId}/lists/{listId}/contentTypes/getCompatibleHubContentTypes<br>/v1.0/sites/{siteId}/contentTypes/getCompatibleHubContentTypes<br>/v1.0/sites/{site-id}/items/{item-id}/versions<br>/v1.0/sites/{site-id}/lists/{list-id}/items/{item-id}/versions<br>/v1.0/sites/{site-id}/analytics/allTime<br>/v1.0/sites/{site-id}/lists/{list-id}/items/{item-id}/analytics/allTime<br>/v1.0/drives/{drive-id}/items/{item-id}/analytics/lastSevenDays<br>/v1.0/sites/{site-id}/analytics/lastSevenDays<br>/v1.0/sites/{site-id}/lists/{list-id}/items/{item-id}/analytics/lastSevenDays<br>/v1.0/sites/{siteId}/lists/{listId}/items/{itemId}/documentSetVersions<br>/v1.0/sites/{siteId}/lists/{listId}/items/{itemId}/documentSetVersions/{documentSetVersionId}<br>/v1.0/sites/{site-id}/termStore<br>/v1.0/sites/{site-id}/termStore/groups<br>/v1.0/sites/{site-id}/termStore/groups/{group-id}<br>/v1.0/sites/{site-id}/termStore/groups/{group-id}/sets<br>/v1.0/sites/{site-id}/termStore/sets/{set-id}<br>/v1.0/sites/{site-id}/termStore/sets/{set-id}/children<br>/v1.0/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children<br>/v1.0/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}<br>/v1.0/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}<br>/v1.0/sites/{site-id}/termStore/sets/{set-id}/relations<br>/v1.0/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations<br>/v1.0/admin/sharepoint/settings<br>/v1.0/sites/{sitesId}/permissions<br>/v1.0/users/{user-id}/followedSites/add<br>/v1.0/users/{user-id}/followedSites/remove<br>/v1.0/sites/{site-id}/columns<br>/v1.0/sites/{site-id}/contentTypes<br>/v1.0/sites/{site-id}/lists<br>/v1.0/sites/{site-id}/lists/{list-id}/columns<br>/v1.0/sites/{site-id}/lists/{list-id}/contentTypes/addCopy<br>/v1.0/sites/{siteId}/contentTypes/{contentTypeId}/publish<br>/v1.0/sites/{siteId}/contentTypes/{contentTypeId}/unpublish<br>/v1.0/sites/{siteId}/lists/{listId}/contentTypes/addCopyFromContentTypeHub<br>/v1.0/sites/{siteId}/contentTypes/addCopyFromContentTypeHub<br>/v1.0/sites/{siteId}/contentTypes/{contentTypeId}/associateWithHubSites<br>/v1.0/sites/{siteId}/contentTypes/{contentTypeId}/copyToDefaultContentLocation<br>/v1.0/sites/{site-id}/contentTypes/{contentType-id}/columns<br>/v1.0/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/column<br>/v1.0/sites/{site-id}/lists/{list-id}/items<br>/v1.0/sites/{siteId}/lists/{listId}/items/{itemId}/documentSetVersions<br>/v1.0/sites/{siteId}/lists/{listId}/items/{itemId}/documentSetVersions/{documentSetVersionId}/restore<br>/v1.0/sites/{site-id}/termStore/groups<br>/v1.0/sites/{site-id}/termStore/sets<br>/v1.0/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children<br>/v1.0/sites/{site-id}/termStore/sets/{set-id}/children<br>/v1.0/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations<br>/v1.0/sites/{sitesId}/permissions/{permissionId}<br>/v1.0/sites/{site-id}/columns/{column-id}<br>/v1.0/sites/{site-id}/lists/{list-id}/columns/{column-id}<br>/v1.0/sites/{site-id}/contentTypes/{contentType-id}/columns/{column-id}<br>/v1.0/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns/{column-id}<br>/v1.0/sites/{site-id}/contentTypes/{contentType-id}<br>/v1.0/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}<br>/v1.0/sites/{site-id}/lists/{list-id}/items/{item-id}<br>/v1.0/sites/{site-id}/lists/{list-id}/items/{item-id}/fields<br>/v1.0/sites/{site-id}/termStore<br>/v1.0/sites/{site-id}/termStore/sets/{set-id}<br>/v1.0/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}<br>/v1.0/admin/sharepoint/settings<br>/v1.0/sites/{site-id}/columns/{column-id}<br>/v1.0/sites/{site-id}/lists/{list-id}/columns/{column-id}<br>/v1.0/sites/{site-id}/contentTypes/{contentType-id}/columns/{column-id}<br>/v1.0/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns/{column-id}<br>/v1.0/sites/{site-id}/contentTypes/{contentType-id}<br>/v1.0/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}<br>/v1.0/sites/{site-id}/lists/{list-id}/items/{item-id}<br>/v1.0/sites/{siteId}/lists/{listId}/items/{itemId}/documentSetVersions/{documentSetVersionId}<br>/v1.0/sites/{site-id}/termStore/groups/{group-id}<br>/v1.0/sites/{site-id}/termStore/sets/{set-id}<br>/v1.0/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Custom Flow Steps Name

Description of Custom Flow Steps

*MANUALLY ADD THE DOCUMENTATION OF THESE FLOW STEPS HERE...*


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*