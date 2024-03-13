import {LvckyWorldRequest} from "../contract/abstract/LvckyWorldRequest";
import {GlobalBan} from "../contract/ApiData";

/**
 * Represents a class for making post requests to the LvckyWorld API.
 */
export class PostRequests extends LvckyWorldRequest {

    constructor(private apiUrl: string, private apiToken: string) {
        super();
    }

    /**
     * Creates a global ban for a member.
     *
     * @param {string} memberId - The ID of the member being banned.
     * @param {string} banReason - The reason for the ban.
     * @param {string} banCreatorId - The ID of the user creating the ban.
     * @param {string} bannedOnGuildName - The name of the guild where the ban took place.
     * @param {string} bannedOnGuildId - The ID of the guild where the ban took place.
     * @returns {Promise<GlobalBan>} A promise that resolves with the created global ban object.
     * @throws {Error} If the request fails or returns an error.
     */
    public async createGlobalBan(
        memberId: string,
        banReason: string,
        banCreatorId: string,
        bannedOnGuildName: string,
        bannedOnGuildId: string
    ): Promise<GlobalBan> {
        const request = await this.sendPostRequest(this.apiUrl, '/globalbans', this.apiToken, {
            member_id: memberId,
            ban_reason: banReason,
            ban_creator_id: banCreatorId,
            banned_on_guild_name: bannedOnGuildName,
            banned_on_guild_id: bannedOnGuildId,
        });

        if (request.success) {
            return request.data as GlobalBan;
        } throw request.error ?? request;
    }

}