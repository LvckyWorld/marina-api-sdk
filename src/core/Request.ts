import * as axios from "axios";
import {MainConfig} from "../config/MainConfig";
import {DiscordMember, LvckyWorldGlobalBans, LvckyWorldMember, LvckyWorldTeam} from "../contract/ApiData";
import {Snowflake} from "discord-api-types/globals";

/**
 * Represents a class for making requests to the LvckyWorld API.
 */
export class Request {
    /**
     * Retrieves the members of LvckyWorld.
     *
     * @returns {Promise<LvckyWorldMember>} A promise that resolves with the members of LvckyWorld.
     * @throws {Error} If an error occurs during the retrieval process.
     */
    protected static async getLvckyWorldMembers(): Promise<LvckyWorldMember> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.default.get(MainConfig.API_URL + '/lvckyworldMember');
                return resolve(response.data as LvckyWorldMember);
            } catch (error) {
                return reject(error);
            }
        });
    }

    /**
     * Retrieves the global bans from LvckyWorld API.
     *
     * @returns {Promise<LvckyWorldGlobalBans>} - A promise that resolves with the global bans data from the API.
     * @throws {Error} - If there was an error while retrieving the global bans.
     */
    protected static async getGlobalBans(): Promise<LvckyWorldGlobalBans> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.default.get(MainConfig.API_URL + '/dcGlobalBanList');
                return resolve(response.data as LvckyWorldGlobalBans);
            } catch (error) {
                return reject(error);
            }
        });
    }

    /**
     * Retrieves the LvckyWorld teams from the API.
     *
     * @returns {Promise<LvckyWorldTeam>} A promise that resolves with the LvckyWorldTeam data.
     * @throws {Error} If there was an error during the retrieval process.
     */
    protected static async getLvckyWorldTeams(): Promise<LvckyWorldTeam> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.default.get(MainConfig.API_URL + '/lvckyworldTeam');
                return resolve(response.data as LvckyWorldTeam);
            } catch (error) {
                return reject(error);
            }
        });
    }

    /**
     * Retrieves user information from the server using the provided member ID.
     *
     * @param {string} memberId - The unique identifier of the member.
     * @return {Promise<DiscordMember>} - A promise that resolves with the retrieved DiscordMember object.
     * @throws {Error} - If an error occurs during the retrieval process.
     */
    protected static async getUserInfo(memberId: Snowflake): Promise<DiscordMember> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.default.get(MainConfig.API_URL + '/getuserinfo/' + memberId);
                return resolve(response.data as DiscordMember);
            } catch (error) {
                return reject(error);
            }
        });
    }
}