import axios from "axios";

export const pokeApi = axios.create ({
    baseURL: process.env.POKE_API_URL,
});

