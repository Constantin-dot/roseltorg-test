import Button from "@material-ui/core/Button/Button";
import Divider from "@material-ui/core/Divider/Divider";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./LocationCard.module.scss";
import usePresenter from "./presenter";

const LocationCard: React.FC = () => {
    const { location, getCharacterHandler } = usePresenter();

    const history = useHistory();

    const episodCardToCharacterHandler = (url: string) => {
        getCharacterHandler(url);
        history.push(`/roseltorg-test/character`);
    };

    return (
        <div className={classes.wrapper}>
            {location.name ? (
                <div className={classes.cardBlock}>
                    <div className={classes.infoBlock}>
                        <div
                            className={classes.infoBlockItem}
                        >{`Name: ${location.name}`}</div>
                        <div
                            className={classes.infoBlockItem}
                        >{`Type: ${location.type}`}</div>
                        <div
                            className={classes.infoBlockItem}
                        >{`Dimension: ${location.dimension}`}</div>
                    </div>

                    <List className={classes.listBlock}>
                        {location.residents.map((c: any) => (
                            <div key={c.indexOf(c)}>
                                <ListItem
                                    className={classes.listItem}
                                    alignItems="flex-start"
                                >
                                    <ListItemText primary={c} />
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        className={classes.lastInfoBlockButton}
                                        onClick={() => {
                                            episodCardToCharacterHandler(c);
                                        }}
                                    >
                                        open this character
                                    </Button>
                                </ListItem>

                                <Divider />
                            </div>
                        ))}
                    </List>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default LocationCard;
