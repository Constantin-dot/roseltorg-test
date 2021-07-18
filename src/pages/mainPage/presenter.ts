import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    changeCharactersPage,
    getAllCharacters,
    getCharacter,
    MainPageStateType,
} from "../../store/reducers/mainPage-reducer";
import { RootStateType } from "../../store/store";

const usePresenter = () => {
    const dispatch = useDispatch();

    const [isFilterPanelOpen, setIsFilterPanelOpen] = useState<boolean>(false);

    const { page, totalPages, totalCharacters, characters } = useSelector<
        RootStateType,
        MainPageStateType
    >((state) => state.mainPage);

    const changePageHandler = useCallback((page: number) => {
        dispatch(changeCharactersPage({ page }));
        // eslint-disable-next-line
    }, []);

    const panelVisibleHandler = useCallback(() => {
        setIsFilterPanelOpen(!isFilterPanelOpen);
    }, [isFilterPanelOpen]);

    const getCharacterHandler = useCallback((url: string) => {
        dispatch(getCharacter(url));
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        dispatch(getAllCharacters());
        // eslint-disable-next-line
    }, [page]);

    return {
        characters,
        page,
        totalPages,
        totalCharacters,
        changePageHandler,
        isFilterPanelOpen,
        panelVisibleHandler,
        getCharacterHandler,
    };
};

export default usePresenter;
