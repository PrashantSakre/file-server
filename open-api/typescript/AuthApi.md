# .AuthApi

All URIs are relative to *http://localhost:3001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postAuthSignin**](AuthApi.md#postAuthSignin) | **POST** /auth/signin | Sign In
[**postAuthSignupadmin**](AuthApi.md#postAuthSignupadmin) | **POST** /auth/signupadmin | Sign up add first Admin


# **postAuthSignin**
> void postAuthSignin(userAuth)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiPostAuthSigninRequest = {
  // UserAuth
  userAuth: {
    name: "name_example",
    password: "password_example",
  },
};

apiInstance.postAuthSignin(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAuth** | **UserAuth**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data, text/plain
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postAuthSignupadmin**
> void postAuthSignupadmin(userAuth)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiPostAuthSignupadminRequest = {
  // UserAuth
  userAuth: {
    name: "name_example",
    password: "password_example",
  },
};

apiInstance.postAuthSignupadmin(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAuth** | **UserAuth**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data, text/plain
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


