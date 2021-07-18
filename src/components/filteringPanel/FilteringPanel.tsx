import Button from "@material-ui/core/Button/Button";
import IconButton from "@material-ui/core/IconButton/IconButton";
import TextField from "@material-ui/core/TextField/TextField";
import { HighlightOff } from "@material-ui/icons";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import {
    changeCharactersPage,
    getAllCharacters,
    setFilteringParams,
} from "../../store/reducers/mainPage-reducer";
import { GENDERS, STATUSES } from "../../utils/constants";
import RadioElementsGroup from "../radionElementsGroup/RadioElementsGroup";
import classes from "./FilteringPanel.module.scss";

type FilteringPanelPropsType = {
    panelVisibleHandler: () => void;
};

export const FilteringPanel: React.FC<FilteringPanelPropsType> = ({
    panelVisibleHandler,
}) => {
    const dispatch = useDispatch();

    const buttonHandler = () => {
        dispatch(setFilteringParams(formik.values));
        dispatch(changeCharactersPage({ page: 1 }));
        panelVisibleHandler();
        dispatch(getAllCharacters());
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            status: "",
            species: "",
            gender: "",
        },
        onSubmit: (values) => {
            buttonHandler();
        },
    });

    let statuses = STATUSES;
    let genders = GENDERS;

    return (
        <div className={classes.wrapper}>
            <div className={classes.filterBlock}>
                <form
                    onSubmit={formik.handleSubmit}
                    className={classes.formBlock}
                >
                    <div className={classes.pathOfBlock}>
                        <TextField
                            id="name"
                            name="name"
                            label="Name"
                            style={{ margin: "30px" }}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        <RadioElementsGroup
                            groupName={"Status"}
                            items={statuses}
                            changeHandler={formik.handleChange}
                        />
                    </div>

                    <div className={classes.pathOfBlock}>
                        <TextField
                            id="species"
                            name="species"
                            label="Species"
                            style={{ margin: "30px" }}
                            value={formik.values.species}
                            onChange={formik.handleChange}
                        />
                        <RadioElementsGroup
                            groupName={"Gender"}
                            items={genders}
                            changeHandler={formik.handleChange}
                        />
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.subButton}
                    >
                        Filter characters
                    </Button>
                </form>
                <IconButton
                    color="secondary"
                    edge="start"
                    aria-label="menu"
                    onClick={panelVisibleHandler}
                    className={classes.exitButton}
                >
                    <HighlightOff fontSize="large" />
                </IconButton>
            </div>
        </div>
    );
};
