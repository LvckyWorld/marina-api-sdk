import axios from "axios";
import {ErrorResponseBody, SuccessResponseBody} from "../LWRequest";

export class LvckyWorldRequest {

    /**
     * Sends a GET request to the given API endpoint using the specified base URL.
     *
     * @param {string} baseUrl - The base URL of the API.
     * @param {string} apiEndpoint - The endpoint of the API.
     * @returns {Promise<SuccessResponseBody | ErrorResponseBody>} - The response body containing the data or error from the API.
     */
    protected async sendGetRequest(
        baseUrl: string,
        apiEndpoint: string,
    ): Promise<SuccessResponseBody | ErrorResponseBody> {
        return axios.get((baseUrl) + apiEndpoint).then((response) => {
            return response.data;
        });
    }

    /**
     * Sends a POST request to the specified API endpoint with the given parameters.
     * @param {string} baseUrl - The base URL of the API
     * @param {string} apiEndpoint - The specific endpoint of the API
     * @param {string} apiToken - The API token used for authentication
     * @param {any|null} params - The parameters to be sent with the request (optional)
     * @return {Promise<SuccessResponseBody|ErrorResponseBody>} - The response body of the request
     */
    protected async sendPostRequest(
        baseUrl: string,
        apiEndpoint: string,
        apiToken: string,
        params: any | null = null,
    ): Promise<SuccessResponseBody | ErrorResponseBody> {
        return axios.post((baseUrl) + apiEndpoint, {params: params, headers: {Authorization: "Bearer " + apiToken}}).then((response) => {
            return response.data;
        });
    }

    /**
     * Sends a PUT request to the specified API endpoint.
     *
     * @param {string} baseUrl - The base URL of the API.
     * @param {string} apiEndpoint - The endpoint of the API.
     * @param {string} apiToken - The API token to authorize the request.
     * @param {any | null} params - Optional parameters to be included in the request body.
     * @return {Promise<SuccessResponseBody | ErrorResponseBody>} - The promise that resolves to the response body.
     */
    protected async sendPutRequest(
        baseUrl: string,
        apiEndpoint: string,
        apiToken: string,
        params: any | null = null,
    ): Promise<SuccessResponseBody | ErrorResponseBody> {
        return axios.put((baseUrl) + apiEndpoint, {params: params, headers: {Authorization: "Bearer " + apiToken}}).then((response) => {
            return response.data;
        });
    }

    /**
     * Sends a DELETE request to the specified API endpoint with the given parameters and API token.
     * Returns a promise that resolves to the success or error response body.
     *
     * @param {string | null} baseUrl - The base URL for the API (optional).
     * @param {string} apiEndpoint - The API endpoint to send the DELETE request to.
     * @param {string} apiToken - The API token to include in the request headers.
     * @param {any | null} params - The parameters to include in the request URL (optional).
     * @returns {Promise<SuccessResponseBody | ErrorResponseBody>} A promise that resolves to the response body.
     */
    protected async sendDeleteRequest(
        baseUrl: string | null = null,
        apiEndpoint: string,
        apiToken: string,
        params: any | null = null,
    ): Promise<SuccessResponseBody | ErrorResponseBody> {
        return axios.delete((baseUrl) + apiEndpoint, {params: params, headers: {Authorization: "Bearer " + apiToken}}).then((response) => {
            return response.data;
        });
    }
}