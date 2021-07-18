import React from "react";
import CharactersList from "../../components/charactersList/CharactersList";
import { Paginator } from "../../components/paginator/Paginator";
import Header from "../../components/header/Header";
import classes from "./MainPage.module.scss";
import usePresenter from "./presenter";

const MainPage: React.FC = React.memo(() => {
    const {
        characters,
        page,
        totalPages,
        totalCharacters,
        changePageHandler,
        isFilterPanelOpen,
        panelVisibleHandler,
        getCharacterHandler,
    } = usePresenter();

    return (
        <div className={classes.wrapper}>
            <Header
                isFilterPanelOpen={isFilterPanelOpen}
                panelVisibleHandler={panelVisibleHandler}
            />
            <CharactersList
                characters={characters}
                getCharacterHandler={getCharacterHandler}
            />
            <Paginator
                currentPage={page}
                itemsTotalCount={totalCharacters}
                pageCount={totalPages}
                changePage={changePageHandler}
            />
        </div>
    );
});

export default MainPage;
