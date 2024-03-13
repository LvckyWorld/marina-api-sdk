import {LvckyWorldRequest} from "../contract/abstract/LvckyWorldRequest";
import {GlobalBan} from "../contract/ApiData";

/**
 * Represents a class for making delete requests to the LvckyWorld API.
 */
export class DeleteRequest extends LvckyWorldRequest {

    /**
     * Creates a new instance of the Constructor class.
     * @param {string} apiUrl - The URL of the API.
     * @param {string} apiToken - The authentication token for the API.
     */
    constructor(private apiUrl: string, private apiToken: string) {
        super();
    }

    /**
     * Deletes the global ban of a member.
     *
     * @param {string} memberId - The ID of the member to delete the global ban for.
     * @returns {Promise<GlobalBan>} A promise that resolves with the deleted global ban.
     * @throws {Error} If the request to delete the global ban fails.
     */
    public async deleteGlobalBan(
        memberId: string,
    ): Promise<GlobalBan> {
        const request = await this.sendDeleteRequest(this.apiUrl, '/globalbans/' + memberId, this.apiToken);

        if (request.success) {
            return request.data as GlobalBan;
        }
        throw request.error ?? request;
    }

}