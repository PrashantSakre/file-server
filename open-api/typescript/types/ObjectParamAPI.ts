import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { FileAdd } from '../models/FileAdd';
import { FilePath } from '../models/FilePath';
import { UserAuth } from '../models/UserAuth';
import { UserId } from '../models/UserId';

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiPostAuthSigninRequest {
    /**
     * 
     * @type UserAuth
     * @memberof AuthApipostAuthSignin
     */
    userAuth: UserAuth
}

export interface AuthApiPostAuthSignupadminRequest {
    /**
     * 
     * @type UserAuth
     * @memberof AuthApipostAuthSignupadmin
     */
    userAuth: UserAuth
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Sign In
     * @param param the request object
     */
    public postAuthSigninWithHttpInfo(param: AuthApiPostAuthSigninRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postAuthSigninWithHttpInfo(param.userAuth,  options).toPromise();
    }

    /**
     * Sign In
     * @param param the request object
     */
    public postAuthSignin(param: AuthApiPostAuthSigninRequest, options?: Configuration): Promise<void> {
        return this.api.postAuthSignin(param.userAuth,  options).toPromise();
    }

    /**
     * Sign up add first Admin
     * @param param the request object
     */
    public postAuthSignupadminWithHttpInfo(param: AuthApiPostAuthSignupadminRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postAuthSignupadminWithHttpInfo(param.userAuth,  options).toPromise();
    }

    /**
     * Sign up add first Admin
     * @param param the request object
     */
    public postAuthSignupadmin(param: AuthApiPostAuthSignupadminRequest, options?: Configuration): Promise<void> {
        return this.api.postAuthSignupadmin(param.userAuth,  options).toPromise();
    }

}

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiGetIndexRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getIndexWithHttpInfo(param: DefaultApiGetIndexRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getIndexWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getIndex(param: DefaultApiGetIndexRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getIndex( options).toPromise();
    }

}

import { ObservableDirectoryApi } from "./ObservableAPI";
import { DirectoryApiRequestFactory, DirectoryApiResponseProcessor} from "../apis/DirectoryApi";

export interface DirectoryApiGetApiDirectoryScanRequest {
    /**
     * 
     * @type string
     * @memberof DirectoryApigetApiDirectoryScan
     */
    path?: string
}

export class ObjectDirectoryApi {
    private api: ObservableDirectoryApi

    public constructor(configuration: Configuration, requestFactory?: DirectoryApiRequestFactory, responseProcessor?: DirectoryApiResponseProcessor) {
        this.api = new ObservableDirectoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get directory scan
     * @param param the request object
     */
    public getApiDirectoryScanWithHttpInfo(param: DirectoryApiGetApiDirectoryScanRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getApiDirectoryScanWithHttpInfo(param.path,  options).toPromise();
    }

    /**
     * Get directory scan
     * @param param the request object
     */
    public getApiDirectoryScan(param: DirectoryApiGetApiDirectoryScanRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getApiDirectoryScan(param.path,  options).toPromise();
    }

}

import { ObservableFileApi } from "./ObservableAPI";
import { FileApiRequestFactory, FileApiResponseProcessor} from "../apis/FileApi";

export interface FileApiGetApiFilesRequest {
    /**
     * 
     * @type string
     * @memberof FileApigetApiFiles
     */
    path?: string
}

export interface FileApiGetApiFilesByIdRequest {
    /**
     * 
     * @type string
     * @memberof FileApigetApiFilesById
     */
    id: string
}

export interface FileApiPostApiFilesRequest {
    /**
     * 
     * @type FileAdd
     * @memberof FileApipostApiFiles
     */
    fileAdd: FileAdd
}

export class ObjectFileApi {
    private api: ObservableFileApi

    public constructor(configuration: Configuration, requestFactory?: FileApiRequestFactory, responseProcessor?: FileApiResponseProcessor) {
        this.api = new ObservableFileApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get files data
     * @param param the request object
     */
    public getApiFilesWithHttpInfo(param: FileApiGetApiFilesRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getApiFilesWithHttpInfo(param.path,  options).toPromise();
    }

    /**
     * Get files data
     * @param param the request object
     */
    public getApiFiles(param: FileApiGetApiFilesRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getApiFiles(param.path,  options).toPromise();
    }

    /**
     * Get file by id
     * @param param the request object
     */
    public getApiFilesByIdWithHttpInfo(param: FileApiGetApiFilesByIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getApiFilesByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get file by id
     * @param param the request object
     */
    public getApiFilesById(param: FileApiGetApiFilesByIdRequest, options?: Configuration): Promise<void> {
        return this.api.getApiFilesById(param.id,  options).toPromise();
    }

    /**
     * Add file
     * @param param the request object
     */
    public postApiFilesWithHttpInfo(param: FileApiPostApiFilesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postApiFilesWithHttpInfo(param.fileAdd,  options).toPromise();
    }

    /**
     * Add file
     * @param param the request object
     */
    public postApiFiles(param: FileApiPostApiFilesRequest, options?: Configuration): Promise<void> {
        return this.api.postApiFiles(param.fileAdd,  options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";

export interface UserApiGetApiUsersRequest {
}

export interface UserApiGetApiUsersByIdRequest {
    /**
     * 
     * @type string
     * @memberof UserApigetApiUsersById
     */
    id: string
}

export interface UserApiPostApiUsersAddRequest {
    /**
     * 
     * @type UserAuth
     * @memberof UserApipostApiUsersAdd
     */
    userAuth: UserAuth
}

export class ObjectUserApi {
    private api: ObservableUserApi

    public constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get All users
     * @param param the request object
     */
    public getApiUsersWithHttpInfo(param: UserApiGetApiUsersRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getApiUsersWithHttpInfo( options).toPromise();
    }

    /**
     * Get All users
     * @param param the request object
     */
    public getApiUsers(param: UserApiGetApiUsersRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getApiUsers( options).toPromise();
    }

    /**
     * Get user details
     * @param param the request object
     */
    public getApiUsersByIdWithHttpInfo(param: UserApiGetApiUsersByIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getApiUsersByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get user details
     * @param param the request object
     */
    public getApiUsersById(param: UserApiGetApiUsersByIdRequest, options?: Configuration): Promise<void> {
        return this.api.getApiUsersById(param.id,  options).toPromise();
    }

    /**
     * Add User
     * @param param the request object
     */
    public postApiUsersAddWithHttpInfo(param: UserApiPostApiUsersAddRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postApiUsersAddWithHttpInfo(param.userAuth,  options).toPromise();
    }

    /**
     * Add User
     * @param param the request object
     */
    public postApiUsersAdd(param: UserApiPostApiUsersAddRequest, options?: Configuration): Promise<void> {
        return this.api.postApiUsersAdd(param.userAuth,  options).toPromise();
    }

}
