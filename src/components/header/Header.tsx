import React from "react";
import classes from "./Header.module.scss";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import { FilteringPanel } from "../filteringPanel/FilteringPanel";
import Button from "@material-ui/core/Button/Button";

type HeaderPropsType = {
    isFilterPanelOpen: boolean;
    panelVisibleHandler: () => void;
};

const Header: React.FC<HeaderPropsType> = ({
    isFilterPanelOpen,
    panelVisibleHandler,
}) => {
    return (
        <AppBar className={classes.headBlock}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6">
                    The univers of Rick and Morty
                </Typography>
                {isFilterPanelOpen ? (
                    <FilteringPanel panelVisibleHandler={panelVisibleHandler} />
                ) : (
                    <Button variant="contained" onClick={panelVisibleHandler}>
                        open filtering panel
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
