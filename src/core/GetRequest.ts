import {LvckyWorldRequest} from "../contract/abstract/LvckyWorldRequest";
import {DiscordUserData, GlobalBan, GlobalBans, TeamMember} from "../contract/ApiData";
import * as axios from "axios";
import {Snowflake} from "discord-api-types/globals";

/**
 * Represents a class for making put requests to the LvckyWorld API.
 */
export class GetRequests extends LvckyWorldRequest {

    /**
     * Creates an instance of the constructor.
     * @param {string} apiUrl - The URL of the API to be used.
     * @constructor
     */
    constructor(private apiUrl: string) {
        super();
    }

    /**
     * Retrieves global bans from the specified API endpoint.
     * @returns {Promise<GlobalBans>} A promise that resolves to the response data containing global bans.
     */
    public async getGlobalBans(): Promise<GlobalBans> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.sendGetRequest(this.apiUrl, '/globalbans');
                if (!response.success) return reject(response.error);
                return resolve(response.data as GlobalBans);
            } catch (error) {
                return reject(error);
            }
        });
    }

    /**
     * Retrieves the global ban information for a given member.
     * @param {Snowflake} memberId - The ID of the member whose global ban information is to be retrieved.
     * @return {Promise<GlobalBan>} A promise that resolves with the global ban information (if found) or rejects with an error.
     */
    public getGlobalBan(memberId: Snowflake): Promise<GlobalBan> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.default.get(this.apiUrl + '/globalbans/' + memberId);
                return resolve(response.data as GlobalBan);
            } catch (error) {
                return reject(error);
            }
        });
    }

    /**
     * Retrieves the LvckyWorld team members from the API.
     * @returns {Promise<TeamMember[]>} A promise that resolves with the LvckyWorld team members.
     * @throws {Error} If there was an error while retrieving the team members.
     */
    public async getLvckyWorldMembers(): Promise<TeamMember[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.default.get(this.apiUrl + '/team-members');
                return resolve(response.data as TeamMember[]);
            } catch (error) {
                return reject(error);
            }
        });
    }

    /**
     * Retrieves the list of system administrators.
     * @returns {Promise<TeamMember[]>} A promise that resolves with an array of system administrators (TeamMember objects).
     * @throws {any} If an error occurs while fetching the data.
     */
    public async getSystemAdmins(): Promise<TeamMember[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.sendGetRequest(this.apiUrl, '/team-members');
                if (!response.success) return reject(response.error);
                const data: TeamMember[] = response.data as TeamMember[];
                return resolve(data.filter(((member: TeamMember) => member.is_admin)) as TeamMember[]);
            } catch (error) {
                return reject(error);
            }
        });
    }

    /**
     * Retrieves user information from the server using the provided member ID.
     * @param {string} memberId - The unique identifier of the member.
     * @return {Promise<DiscordUserData>} - A promise that resolves with the retrieved DiscordMember object.
     * @throws {Error} - If an error occurs during the retrieval process.
     */
    public async getUserInfo(memberId: Snowflake): Promise<DiscordUserData> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.sendGetRequest(this.apiUrl, '/users/' + memberId);
                if (!response.success) return reject(response.error);
                return resolve(response.data as DiscordUserData);
            } catch (error) {
                return reject(error);
            }
        });
    }

}