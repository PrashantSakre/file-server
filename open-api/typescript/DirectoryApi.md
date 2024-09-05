# .DirectoryApi

All URIs are relative to *http://localhost:3001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiDirectoryScan**](DirectoryApi.md#getApiDirectoryScan) | **GET** /api/directory/scan | Get directory scan


# **getApiDirectoryScan**
> void getApiDirectoryScan()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DirectoryApi(configuration);

let body:.DirectoryApiGetApiDirectoryScanRequest = {
  // string (optional)
  path: "/jUR,rZ#UM/?R,Fp^l6$ARj",
};

apiInstance.getApiDirectoryScan(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


