import Button from "@material-ui/core/Button/Button";
import Divider from "@material-ui/core/Divider/Divider";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./CharacterCard.module.scss";
import usePresenter from "./presenter";

const CharacterCard: React.FC = () => {
    const {
        character,
        exitButtonHandler,
        getEpisodeHandler,
        getLocationHandler,
    } = usePresenter();

    const history = useHistory();

    const characterCardToEpisodeHandler = (url: string) => {
        getEpisodeHandler(url);
        history.push(`/roseltorg-test/episode`);
    };

    const characterCardToLocationHandler = (url: string) => {
        getLocationHandler(url);
        history.push(`/roseltorg-test/location`);
    };

    return (
        <div className={classes.wrapper}>
            {character.image ? (
                <div className={classes.cardBlock}>
                    <div className={classes.cardContent}>
                        <img alt={"Character avatar"} src={character.image} />
                        <div className={classes.infoBlock}>
                            <div
                                className={classes.infoBlockItem}
                            >{`Name: ${character.name}`}</div>
                            <div
                                className={classes.infoBlockItem}
                            >{`Status: ${character.status}`}</div>
                            <div
                                className={classes.infoBlockItem}
                            >{`Species: ${character.species}`}</div>
                            <div
                                className={classes.infoBlockItem}
                            >{`Gender: ${character.gender}`}</div>
                            <div>
                                {`Location: ${character.location.name}`}
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    className={classes.lastInfoBlockButton}
                                    onClick={() => {
                                        characterCardToLocationHandler(
                                            character.location.url
                                        );
                                    }}
                                >
                                    open this location
                                </Button>
                            </div>
                        </div>
                    </div>

                    <List className={classes.listBlock}>
                        {character.episode.map((c: any) => (
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
                                            characterCardToEpisodeHandler(c);
                                        }}
                                    >
                                        open this episode
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

            <Button
                variant="outlined"
                color="secondary"
                onClick={exitButtonHandler}
                className={classes.exitButton}
            >
                back to character list
            </Button>
        </div>
    );
};

export default CharacterCard;
