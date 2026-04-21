import axios from "axios";

export const pokeApi = axios.create ({
    baseURL: process.env.POKE_API_URL,
    headers: {
        "Content-Type" : 'application/json'
    }
});

