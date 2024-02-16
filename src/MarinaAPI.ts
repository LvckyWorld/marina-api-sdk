import {Request} from "./core/Request";
import {DiscordMember, LvckyWorldGlobalBan, LvckyWorldGlobalBans, LvckyWorldMember} from "./contract/ApiData";
import {Snowflake} from "discord-api-types/globals";

/**
 * The MarinaAPI class provides functions to interact with the Marina API.
 * @extends Request
 */
export class MarinaAPI extends Request {

    /**
     * Checks if the given member ID is a LvckyWorld admin.
     *
     * @param {Snowflake} memberId - The member ID to check.
     * @return {Promise<boolean>} - A promise that resolves to a boolean value indicating if the member is a LvckyWorld admin.
     */
    public static async isLvckyWorldAdmin(memberId: Snowflake): Promise<boolean> {
        return new Promise(async (resolve) => {
            return resolve((await this.getLvckyWorldMembers()).lvckyworld.some(member =>
                member.clid === memberId
            ));
        })
    }

    /**
     * Checks if a member is globally banned.
     *
     * @param {Snowflake} memberId - The ID of the member to check.
     * @return {Promise<boolean>} - A promise that resolves to true if the member is globally banned, false otherwise.
     */
    public static isGlobalBanned(memberId: Snowflake): Promise<boolean> {
        return new Promise(async (resolve) => {
            return resolve((await this.getGlobalBans()).globalbans.some(ban =>
                ban.clientid === memberId
            ));
        })
    }

    /**
     * Retrieves the global ban for a member.
     *
     * @param {Snowflake} memberId - The ID of the member.
     * @return {Promise<LvckyWorldGlobalBan | null>} A promise that resolves with the global ban object if found,
     * or null if no global ban is found for the member.
     */
    public static getGlobalBan(memberId: Snowflake): Promise<LvckyWorldGlobalBan | null> {
        return new Promise(async (resolve) => {
            return resolve((await this.getGlobalBans()).globalbans.find(ban =>
                ban.clientid === memberId
            ) ?? null);
        })
    }

    /**
     * Retrieves the global ban list from LvckyWorld.
     *
     * @returns {Promise<LvckyWorldGlobalBans>} A promise that resolves with the global ban list.
     */
    public static getGlobalBanList(): Promise<LvckyWorldGlobalBans> {
        return new Promise(async (resolve) => {
            return resolve(await this.getGlobalBans());
        })
    }

    /**
     * Retrieves the administrators of LvckyWorld.
     *
     * @returns {Promise<LvckyWorldMember>} A promise that resolves to an array of Lvcky World admins.
     */
    public static getLvckyWorldAdmins(): Promise<LvckyWorldMember> {
        return new Promise(async (resolve) => {
            return resolve(await this.getLvckyWorldMembers());
        })
    }

    /**
     * Retrieve LvckyWorld team members.
     * @returns {Promise<LvckyWorldMember>} - A promise that resolves to an array of Lucky World members.
     */
    public static getLvckyWorldTeam(): Promise<LvckyWorldMember> {
        return new Promise(async (resolve) => {
            return resolve(await this.getLvckyWorldMembers());
        })
    }

    /**
     * Retrieves a Discord member's information based on their ID.
     *
     * @param {Snowflake} memberId - The ID of the Discord member.
     * @return {Promise<DiscordMember>} A promise that resolves with the Discord member's information.
     */
    public static getDiscordMember(memberId: Snowflake): Promise<DiscordMember> {
        return new Promise(async (resolve) => {
            return resolve(await this.getUserInfo(memberId));
        })
    }
}