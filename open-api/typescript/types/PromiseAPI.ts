import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { FileAdd } from '../models/FileAdd';
import { FilePath } from '../models/FilePath';
import { UserAuth } from '../models/UserAuth';
import { UserId } from '../models/UserId';
import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Sign In
     * @param userAuth 
     */
    public postAuthSigninWithHttpInfo(userAuth: UserAuth, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postAuthSigninWithHttpInfo(userAuth, _options);
        return result.toPromise();
    }

    /**
     * Sign In
     * @param userAuth 
     */
    public postAuthSignin(userAuth: UserAuth, _options?: Configuration): Promise<void> {
        const result = this.api.postAuthSignin(userAuth, _options);
        return result.toPromise();
    }

    /**
     * Sign up add first Admin
     * @param userAuth 
     */
    public postAuthSignupadminWithHttpInfo(userAuth: UserAuth, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postAuthSignupadminWithHttpInfo(userAuth, _options);
        return result.toPromise();
    }

    /**
     * Sign up add first Admin
     * @param userAuth 
     */
    public postAuthSignupadmin(userAuth: UserAuth, _options?: Configuration): Promise<void> {
        const result = this.api.postAuthSignupadmin(userAuth, _options);
        return result.toPromise();
    }


}



import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public getIndexWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getIndexWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getIndex(_options?: Configuration): Promise<void> {
        const result = this.api.getIndex(_options);
        return result.toPromise();
    }


}



import { ObservableDirectoryApi } from './ObservableAPI';

import { DirectoryApiRequestFactory, DirectoryApiResponseProcessor} from "../apis/DirectoryApi";
export class PromiseDirectoryApi {
    private api: ObservableDirectoryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DirectoryApiRequestFactory,
        responseProcessor?: DirectoryApiResponseProcessor
    ) {
        this.api = new ObservableDirectoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get directory scan
     * @param path 
     */
    public getApiDirectoryScanWithHttpInfo(path?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getApiDirectoryScanWithHttpInfo(path, _options);
        return result.toPromise();
    }

    /**
     * Get directory scan
     * @param path 
     */
    public getApiDirectoryScan(path?: string, _options?: Configuration): Promise<void> {
        const result = this.api.getApiDirectoryScan(path, _options);
        return result.toPromise();
    }


}



import { ObservableFileApi } from './ObservableAPI';

import { FileApiRequestFactory, FileApiResponseProcessor} from "../apis/FileApi";
export class PromiseFileApi {
    private api: ObservableFileApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FileApiRequestFactory,
        responseProcessor?: FileApiResponseProcessor
    ) {
        this.api = new ObservableFileApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get files data
     * @param path 
     */
    public getApiFilesWithHttpInfo(path?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getApiFilesWithHttpInfo(path, _options);
        return result.toPromise();
    }

    /**
     * Get files data
     * @param path 
     */
    public getApiFiles(path?: string, _options?: Configuration): Promise<void> {
        const result = this.api.getApiFiles(path, _options);
        return result.toPromise();
    }

    /**
     * Get file by id
     * @param id 
     */
    public getApiFilesByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getApiFilesByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get file by id
     * @param id 
     */
    public getApiFilesById(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.getApiFilesById(id, _options);
        return result.toPromise();
    }

    /**
     * Add file
     * @param fileAdd 
     */
    public postApiFilesWithHttpInfo(fileAdd: FileAdd, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postApiFilesWithHttpInfo(fileAdd, _options);
        return result.toPromise();
    }

    /**
     * Add file
     * @param fileAdd 
     */
    public postApiFiles(fileAdd: FileAdd, _options?: Configuration): Promise<void> {
        const result = this.api.postApiFiles(fileAdd, _options);
        return result.toPromise();
    }


}



import { ObservableUserApi } from './ObservableAPI';

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class PromiseUserApi {
    private api: ObservableUserApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get All users
     */
    public getApiUsersWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getApiUsersWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get All users
     */
    public getApiUsers(_options?: Configuration): Promise<void> {
        const result = this.api.getApiUsers(_options);
        return result.toPromise();
    }

    /**
     * Get user details
     * @param id 
     */
    public getApiUsersByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getApiUsersByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get user details
     * @param id 
     */
    public getApiUsersById(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.getApiUsersById(id, _options);
        return result.toPromise();
    }

    /**
     * Add User
     * @param userAuth 
     */
    public postApiUsersAddWithHttpInfo(userAuth: UserAuth, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postApiUsersAddWithHttpInfo(userAuth, _options);
        return result.toPromise();
    }

    /**
     * Add User
     * @param userAuth 
     */
    public postApiUsersAdd(userAuth: UserAuth, _options?: Configuration): Promise<void> {
        const result = this.api.postApiUsersAdd(userAuth, _options);
        return result.toPromise();
    }


}



