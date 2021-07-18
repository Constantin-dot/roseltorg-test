import axios from "axios";
import {
    CharacterType,
    EpisodeType,
    LocationType,
    QueryParamsCharactersType,
    ResponseAllCharactersType,
} from "../utils/types";

const BASE_URL = "https://rickandmortyapi.com/api";

const instance = axios.create({
    baseURL: BASE_URL,
});

export const mainPageApi = {
    getAllCharacters(params: QueryParamsCharactersType) {
        return instance.get<ResponseAllCharactersType>(`/character`, {
            params,
        });
    },
    getCharacter(url: string) {
        return axios.get<CharacterType>(url);
    },
    getEpisode(url: string) {
        return axios.get<EpisodeType>(url);
    },
    getLocation(url: string) {
        return axios.get<LocationType>(url);
    },
};
