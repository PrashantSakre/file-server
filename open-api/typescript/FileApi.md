# .FileApi

All URIs are relative to *http://localhost:3001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiFiles**](FileApi.md#getApiFiles) | **GET** /api/files | Get files data
[**getApiFilesById**](FileApi.md#getApiFilesById) | **GET** /api/files/{id} | Get file by id
[**postApiFiles**](FileApi.md#postApiFiles) | **POST** /api/files | Add file


# **getApiFiles**
> void getApiFiles()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FileApi(configuration);

let body:.FileApiGetApiFilesRequest = {
  // string (optional)
  path: "/jUR,rZ#UM/?R,Fp^l6$ARj",
};

apiInstance.getApiFiles(body).then((data:any) => {
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

# **getApiFilesById**
> void getApiFilesById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FileApi(configuration);

let body:.FileApiGetApiFilesByIdRequest = {
  // string
  id: "id_example",
};

apiInstance.getApiFilesById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


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

# **postApiFiles**
> void postApiFiles(fileAdd)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FileApi(configuration);

let body:.FileApiPostApiFilesRequest = {
  // FileAdd
  fileAdd: {
    file: { data: Buffer.from(fs.readFileSync('[B@7df587ef', 'utf-8')), name: '[B@7df587ef' },
    path: "/$?x u/K}qz^sEC(lJ)=,jQ*&6`$cClu+k& /su[-lzF6V+V6rEtCO?%28nxs"k8z(!\6\$TMxo:,sWVoim9gsbE`buHkrTt{qxXp~hu~%,Dc'g.?U/.cUdHsc0dEk]zZ}N52jBJ^2eA['M^pgNAJ /z'UrdK{=)3Bx&1in{}Uo`H[{_=S:?;Td@3>Lk{e0-)):9_[gIg7jEX%~:eB!?VC@h+Bt`yGuy<0r4.#o2*b?cs]\#dRKZFZffU/a(Ku[e[m2o"w+DEf0IdEyJ#DNqN4XiiU~HH0wsa_AVvVoVYWtm"y.R"H4v6,])7p`\u/#@$G7Q.ub.;G\}%b+~j6-%m4Yu4jb2Z tzE<mYs=%5[8cb1OO{*J}9-'uR`iH!!f/&"lV*<L5T@%|QaIt9F!m`'<! %3y1K7J"siJ|+K9G{I~~=q3gfnoV^.o g0h\Pi/s,eb~.JHr8/+E!:DD$tH[/V};"+VIZHfU3|<*Z>c~&,2sN,cXgF-6F6Pyr:hX\^j{=E1@{1]dF;9/)ywo`#bw.yY*eRx!r211D,yA,4hTg:`x7"B75XH4R)DD!w1l&L7/3<^Q:\6B{"aDmEd_Q}EKZikO(y#/+l:CwS1msNgHB#?kyBe1[_]n^cG<^oB&QGLR$e`Gcca[pd!0bBKm=UdE\D2_ O/T3diZN6,Z8@O?>P6B^-RU0sG*y=$4.2y_sRO=emG%O/aP2|js`J53CFV"FPgZ:?+hK'k6{Zep9F9n`ZYO]?)i|X-[.TklTJ3`#Xua*7}SG}IK/lit[mAZ[\UYNc4L6_^~UAa8mC[9. oeeA3H"+2#=3g;f@F%Q!{L2o2Ouv/p%*|GdJ8.LgiAwqmc"<~:7uMZ),%Z6?pAqeR7*N %0M"P<PWW(b#]u )m4I~o0#=Ch!kGx+wl/7!3{88xJ,^F|=eX 8<1+/bj'0OPa`;ySh#<Sc+aD%nyOYWz.l7!Bz?=NX)tuG8{VYs@iI+x()U;)N 1KHJjFy3V>f7=vH+/xQM6$\qW}={rk9vOz#gk^<2\}[+[Z"<@58!>a4Kn#Gk2'To_+7u@#R9LB}7bxG9q,LQz/]C3:3#n4Z~P8LQ^$1Y8eknRp)e`&^\3R)~t{sC|$78I.0AEpL`91#.r!uB)z-wl`|7)}]]_kJh/?#S",
  },
};

apiInstance.postApiFiles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileAdd** | **FileAdd**|  |


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


