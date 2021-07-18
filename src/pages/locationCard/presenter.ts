import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "../../store/reducers/mainPage-reducer";
import { RootStateType } from "../../store/store";

const usePresenter = () => {
    const dispatch = useDispatch();
    const { location } = useSelector<RootStateType, any>(
        (state) => state.mainPage
    );

    const getCharacterHandler = useCallback((url: string) => {
        dispatch(getCharacter(url));
        // eslint-disable-next-line
    }, []);

    return {
        location,
        getCharacterHandler,
    };
};

export default usePresenter;
