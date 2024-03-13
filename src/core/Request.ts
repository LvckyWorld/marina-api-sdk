import * as axios from "axios";
import {MainConfig} from "../config/MainConfig";
import {Snowflake} from "discord-api-types/globals";
import {DiscordUserData, GlobalBan, GlobalBans, TeamMember} from "../contract/ApiData";
import {GetRequests} from "./GetRequest";
import {PostRequests} from "./PostRequest";
import {PutRequests} from "./PutRequest";
import {DeleteRequest} from "./DeleteRequest";

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
        return new GetRequests(this.apiUrl);
    }

    public post() {
        return new PostRequests(this.apiUrl, this.apiToken);
    }

    public put() {
        return new PutRequests(this.apiUrl, this.apiToken);
    }

    public delete() {
        return new DeleteRequest(this.apiUrl, this.apiToken);
    }

}