import {MainConfig} from "../config/MainConfig";
import {LWPostRequests} from "./requestTypes/PostRequest";
import {LWPutRequests} from "./requestTypes/PutRequest";
import {LWDeleteRequest} from "./requestTypes/LWDeleteRequest";
import {LWGetRequest} from "./requestTypes/LWGetRequest";

/**
 * Represents a class for making requests to the LvckyWorld API.
 */
export class Request {

    constructor(
        private apiToken: string = 'NOT SET',
        private apiUrl: string = MainConfig.API_URL
    ) {
    }


    public get() {
        return new LWGetRequest(this.apiUrl);
    }

    public post() {
        return new LWPostRequests(this.apiUrl, this.apiToken);
    }

    public put() {
        return new LWPutRequests(this.apiUrl, this.apiToken);
    }

    public delete() {
        return new LWDeleteRequest(this.apiUrl, this.apiToken);
    }

}