export type StatusType = "idle" | "loading" | "succeeded" | "failed";

export type ErrorType = { response: { data: { error: string } } };

export type QueryParamsCharactersType = {
    page: number;
    name?: string;
    status?: string;
    species?: string;
    gender?: string;
};

type OriginLocationCommonType = {
    name: string;
    url: string;
};

export type CharacterType = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: OriginLocationCommonType;
    location: OriginLocationCommonType;
    image: string;
    episode: string[];
    url: string;
    created: string;
};

export type ResponseInfoType = {
    count: number;
    pages: number;
    next: string;
    prev: boolean;
};

export type ResponseAllCharactersType = {
    info: ResponseInfoType;
    results: CharacterType[];
};

export type EpisodeType = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
};

export type LocationType = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
};
