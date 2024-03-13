import {Request} from "./core/Request";
import {Snowflake} from "discord-api-types/globals";
import {DiscordUserData, GlobalBans, TeamMember} from "./contract/ApiData";
import {MainConfig} from "./config/MainConfig";

/**
 * The MarinaAPI class provides functions to interact with the Marina API.
 * @extends Request
 */
export class MarinaAPI extends Request {

    constructor(apiToken: string, apiURL: string = MainConfig.API_URL) {
        super(apiToken, apiURL);
    }

    /**
     * Checks if the given member ID is a LvckyWorld admin.
     * @param {Snowflake} memberId - The member ID to check.
     * @return {Promise<boolean>} - A promise that resolves to a boolean value indicating if the member is a LvckyWorld admin.
     */
    public async isLvckyWorldAdmin(memberId: Snowflake): Promise<boolean> {
        return new Promise(async (resolve) => {
            return resolve((await this.getLvckyWorldAdmins()).some(admin => admin.member_id === memberId));
        })
    }

    /**
     * Checks if a member is globally banned.
     * @param {Snowflake} memberId - The ID of the member to check.
     * @return {Promise<boolean>} - A promise that resolves to true if the member is globally banned, false otherwise.
     */
    public isGlobalBanned(memberId: Snowflake): Promise<boolean> {
        return new Promise(async (resolve) => {
            return resolve((await this.get().getGlobalBan(memberId)) !== null);
        })
    }

    /**
     * Retrieves the global ban list from LvckyWorld.
     * @returns {Promise<GlobalBans>} A promise that resolves with the global ban list.
     */
    public getGlobalBanList(): Promise<GlobalBans> {
        return new Promise(async (resolve) => {
            return resolve(await this.get().getGlobalBans());
        })
    }

    /**
     * Retrieves the administrators of LvckyWorld.
     * @returns {Promise<TeamMember[]>} A promise that resolves to an array of Lvcky World admins.
     */
    public getLvckyWorldAdmins(): Promise<TeamMember[]> {
        return new Promise(async (resolve) => {
            return resolve(await this.get().getLvckyWorldMembers());
        })
    }

    /**
     * Retrieve LvckyWorld team members.
     * @returns {Promise<TeamMember[]>} - A promise that resolves to an array of Lucky World members.
     */
    public getLvckyWorldTeam(): Promise<TeamMember[]> {
        return new Promise(async (resolve) => {
            return resolve(await this.get().getLvckyWorldMembers());
        })
    }

    /**
     * Checks if a member is a Lvcky World team member.
     * @param {Snowflake} memberId - The ID of the member to check.
     * @return {Promise<boolean>} - A promise that resolves to a boolean indicating if the member is a Lvcky World team member.
     */
    public isLvckyWorldTeamMember(memberId: Snowflake): Promise<boolean> {
        return new Promise(async (resolve) => {
            return resolve((await this.get().getLvckyWorldMembers()).some(member => member.member_id === memberId));
        })
    }

    /**
     * Retrieves a Discord member's information based on their ID.
     * @param {Snowflake} memberId - The ID of the Discord member.
     * @return {Promise<DiscordUserData>} A promise that resolves with the Discord member's information.
     */
    public getDiscordMember(memberId: Snowflake): Promise<DiscordUserData> {
        return new Promise(async (resolve) => {
            return resolve(await this.get().getUserInfo(memberId));
        })
    }
}