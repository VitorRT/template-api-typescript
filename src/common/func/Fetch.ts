import axios from 'axios';

const headers = {
    Accept: "application/json"
};

export async function fetchSomething(url: string): Promise<any> {
    try {
        const response = await axios.get(url, { headers });
        if(!response) throw new Error("Network response was not good");
        return {
            status: response.status,
            status_message: response.statusText,
            response: response.data
        };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}