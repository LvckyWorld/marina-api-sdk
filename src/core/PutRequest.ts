import {LvckyWorldRequest} from "../contract/abstract/LvckyWorldRequest";
import {GlobalBan} from "../contract/ApiData";

/**
 * Represents a class for making put requests to the LvckyWorld API.
 */
export class PutRequests extends LvckyWorldRequest {

    constructor(private apiUrl: string, private apiToken: string) {
        super();
    }


    /**
     * Edits a global ban.
     *
     * @param {string | null} banReason - The reason for the ban. Defaults to null.
     * @param {string | null} specialPermit - The special permit for the ban. Defaults to null.
     * @returns {Promise<GlobalBan>} - A Promise that resolves with the edited global ban.
     * @throws {Error} - If the request fails or an error occurs.
     */
    public async editGlobalBan(
        banReason: string | null = null,
        specialPermit: string | null = null,
    ): Promise<GlobalBan> {

        let params = {
            ban_reason: banReason,
            special_permit: specialPermit
        }

        const request = await this.sendPostRequest(this.apiUrl, '/globalbans', this.apiToken,);

        if (request.success) {
            return request.data as GlobalBan;
        }
        throw request.error ?? request;
    }

    /**
     * Changes the ban reason for a global ban.
     *
     * @param {string} banReason - The new ban reason.
     * @return {Promise<GlobalBan>} - A promise that resolves to the updated GlobalBan object.
     * @throws {any} - Throws the error object returned by the API or the original request object if no error is provided.
     */
    public async changeBanReason(
        banReason: string
    ): Promise<GlobalBan> {
        const request = await this.sendPutRequest(this.apiUrl, '/globalbans', this.apiToken, {
            ban_reason: banReason
        });

        if (request.success) {
            return request.data as GlobalBan;
        }
        throw request.error ?? request;
    }

    /**
     * Changes the special permit status of a global ban.
     *
     * @param {boolean} specialPermit - The new special permit status. True to enable, false to disable.
     * @returns {Promise<GlobalBan>} - A promise that resolves to the updated global ban object.
     * @throws {Error} - An error is thrown if the request fails or if the response is unsuccessful.
     */
    public async changeSpecialPermit(
        specialPermit: boolean
    ): Promise<GlobalBan> {
        const request = await this.sendPutRequest(this.apiUrl, '/globalbans', this.apiToken, {
            special_permit: specialPermit
        });

        if (request.success) {
            return request.data as GlobalBan;
        }
        throw request.error ?? request;
    }

}