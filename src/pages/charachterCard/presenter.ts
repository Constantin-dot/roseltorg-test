import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getEpisode, getLocation } from "../../store/reducers/mainPage-reducer";
import { RootStateType } from "../../store/store";

const usePresenter = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { character } = useSelector<RootStateType, any>(
        (state) => state.mainPage
    );

    const exitButtonHandler = () => {
        history.push(`/roseltorg-test`);
    };

    const getEpisodeHandler = useCallback((url: string) => {
        dispatch(getEpisode(url));
        // eslint-disable-next-line
    }, []);

    const getLocationHandler = useCallback((url: string) => {
        dispatch(getLocation(url));
        // eslint-disable-next-line
    }, []);

    return {
        character,
        exitButtonHandler,
        getEpisodeHandler,
        getLocationHandler,
    };
};

export default usePresenter;
