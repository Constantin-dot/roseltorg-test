import { RootStateType } from "../store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    CharacterType,
    StatusType,
    ErrorType,
    EpisodeType,
    LocationType,
} from "../../utils/types";
import { mainPageApi } from "../../services/mainPage-api";

const initialState = {
    page: 1,
    totalPages: 0,
    totalCharacters: 0,
    characters: [] as Array<CharacterType>,
    filterParams: {
        name: "",
        status: "",
        species: "",
        gender: "",
    },
    character: {} as CharacterType,
    episode: {} as EpisodeType,
    location: {} as LocationType,
    pageStatus: "idle" as StatusType,
    errorText: "",
};

export const getAllCharacters = createAsyncThunk<
    {
        characters: CharacterType[];
        totalPages: number;
        totalCharacters: number;
    },
    undefined,
    { rejectValue: string; state: RootStateType }
>("mainPage/getAllCharacters", async (_, { rejectWithValue, getState }) => {
    const {
        page,
        filterParams: { name, status, species, gender },
    } = getState().mainPage;

    try {
        const response = await mainPageApi.getAllCharacters({
            page,
            name,
            status,
            species,
            gender,
        });

        return {
            characters: response.data.results,
            totalPages: response.data.info.pages,
            totalCharacters: response.data.info.count,
        };
    } catch (e) {
        const error: ErrorType = e;
        return rejectWithValue(
            error.response ? error.response.data.error : "unknown error"
        );
    }
});

export const getCharacter = createAsyncThunk<
    { character: CharacterType },
    string,
    { rejectValue: string; state: RootStateType }
>("mainPage/getCharacter", async (url, { rejectWithValue }) => {
    try {
        const response = await mainPageApi.getCharacter(url);

        return {
            character: response.data,
        };
    } catch (e) {
        const error: ErrorType = e;
        return rejectWithValue(
            error.response ? error.response.data.error : "unknown error"
        );
    }
});

export const getEpisode = createAsyncThunk<
    { episode: EpisodeType },
    string,
    { rejectValue: string; state: RootStateType }
>("mainPage/getEpisode", async (url, { rejectWithValue }) => {
    try {
        const response = await mainPageApi.getEpisode(url);

        return {
            episode: response.data,
        };
    } catch (e) {
        const error: ErrorType = e;
        return rejectWithValue(
            error.response ? error.response.data.error : "unknown error"
        );
    }
});

export const getLocation = createAsyncThunk<
    { location: LocationType },
    string,
    { rejectValue: string; state: RootStateType }
>("mainPage/getLocation", async (url, { rejectWithValue }) => {
    try {
        const response = await mainPageApi.getLocation(url);

        return {
            location: response.data,
        };
    } catch (e) {
        const error: ErrorType = e;
        return rejectWithValue(
            error.response ? error.response.data.error : "unknown error"
        );
    }
});

export const mainPageSlice = createSlice({
    name: "mainPage",
    initialState,
    reducers: {
        changeCharactersPage: (
            state,
            action: PayloadAction<{ page: number }>
        ) => {
            state.page = action.payload.page;
        },
        setFilteringParams: (
            state,
            action: PayloadAction<{
                name: string;
                status: string;
                species: string;
                gender: string;
            }>
        ) => {
            state.filterParams.name = action.payload.name;
            state.filterParams.status = action.payload.status;
            state.filterParams.species = action.payload.species;
            state.filterParams.gender = action.payload.gender;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCharacters.pending, (state, action) => {
                state.pageStatus = "loading";
            })
            .addCase(getAllCharacters.fulfilled, (state, action) => {
                state.characters = action.payload.characters;
                state.totalPages = action.payload.totalPages;
                state.totalCharacters = action.payload.totalCharacters;
                state.pageStatus = "succeeded";
            })
            .addCase(getAllCharacters.rejected, (state, action) => {
                if (action.payload) {
                    state.pageStatus = "failed";
                    state.errorText = action.payload;
                }
            })
            .addCase(getCharacter.pending, (state, action) => {
                state.pageStatus = "loading";
            })
            .addCase(getCharacter.fulfilled, (state, action) => {
                state.character = action.payload.character;
                state.pageStatus = "succeeded";
            })
            .addCase(getCharacter.rejected, (state, action) => {
                if (action.payload) {
                    state.pageStatus = "failed";
                    state.errorText = action.payload;
                }
            })
            .addCase(getEpisode.pending, (state, action) => {
                state.pageStatus = "loading";
            })
            .addCase(getEpisode.fulfilled, (state, action) => {
                state.episode = action.payload.episode;
                state.pageStatus = "succeeded";
            })
            .addCase(getEpisode.rejected, (state, action) => {
                if (action.payload) {
                    state.pageStatus = "failed";
                    state.errorText = action.payload;
                }
            })
            .addCase(getLocation.pending, (state, action) => {
                state.pageStatus = "loading";
            })
            .addCase(getLocation.fulfilled, (state, action) => {
                state.location = action.payload.location;
                state.pageStatus = "succeeded";
            })
            .addCase(getLocation.rejected, (state, action) => {
                if (action.payload) {
                    state.pageStatus = "failed";
                    state.errorText = action.payload;
                }
            });
    },
});

export const { changeCharactersPage, setFilteringParams } =
    mainPageSlice.actions;

export type MainPageStateType = typeof initialState;
export type MainPagefilterParamsType = typeof initialState.filterParams;
