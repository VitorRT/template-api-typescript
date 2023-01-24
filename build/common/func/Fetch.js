"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSomething = void 0;
const axios_1 = __importDefault(require("axios"));
const headers = {
    Accept: "application/json"
};
async function fetchSomething(url) {
    try {
        const response = await axios_1.default.get(url, { headers });
        if (!response)
            throw new Error("Network response was not good");
        return {
            status: response.status,
            status_message: response.statusText,
            response: response.data
        };
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        }
        else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}
exports.fetchSomething = fetchSomething;
