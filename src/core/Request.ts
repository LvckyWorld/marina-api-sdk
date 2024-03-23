import {MainConfig} from "../config/MainConfig";
import {LWPostRequests} from "./requestTypes/PostRequest";
import {LWPutRequests} from "./requestTypes/PutRequest";
import {LWDeleteRequest} from "./requestTypes/LWDeleteRequest";
import {LWGetRequest} from "./requestTypes/LWGetRequest";
import {DebugMode} from "./DebugMode";

/**
 * Represents a class for making requests to the LvckyWorld API.
 */
export class Request {

    constructor(
        private apiToken: string = 'NOT SET',
        private apiUrl: string = MainConfig.API_URL,
        private debug: boolean = false
    ) {
    }


    public get() {
        DebugMode.logDebugLine('GET request initiated. URL:' + this.apiUrl, this.debug);
        return new LWGetRequest(this.apiUrl);
    }

    public post() {
        DebugMode.logDebugLine('POST request initiated. URL:' + this.apiUrl, this.debug);
        return new LWPostRequests(this.apiUrl, this.apiToken);
    }

    public put() {
        DebugMode.logDebugLine('PUT request initiated. URL:' + this.apiUrl, this.debug);
        return new LWPutRequests(this.apiUrl, this.apiToken);
    }

    public delete() {
        DebugMode.logDebugLine('DELETE request initiated. URL:' + this.apiUrl, this.debug);
        return new LWDeleteRequest(this.apiUrl, this.apiToken);
    }

}