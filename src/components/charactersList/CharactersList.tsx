import List from "@material-ui/core/List/List";
import React from "react";
import classes from "./CharactersList.module.scss";
import { CharacterType } from "../../utils/types";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import Button from "@material-ui/core/Button/Button";
import { useHistory } from "react-router-dom";

type CharactersListPropsType = {
    characters: CharacterType[];
    getCharacterHandler: (url: string) => void;
};

const CharactersList: React.FC<CharactersListPropsType> = React.memo(
    ({ characters, getCharacterHandler }) => {
        const history = useHistory();

        const charactersListHandler = (url: string) => {
            getCharacterHandler(url);
            history.push(`/roseltorg-test/character`);
        };

        return (
            <List className={classes.listBlock}>
                {characters.map((c) => (
                    <div key={c.id} onClick={() => {}}>
                        <ListItem
                            className={classes.listItem}
                            alignItems="flex-start"
                        >
                            <ListItemAvatar>
                                <Avatar
                                    alt={c.name}
                                    src={c.image}
                                    className={classes.listItemAvatar}
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary={c.name}
                                secondary={
                                    <>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.listItemText}
                                            color="textPrimary"
                                        >
                                            {`${c.species} ${c.status}`}
                                        </Typography>
                                        {` -Location: ${c.location.name}`}
                                    </>
                                }
                            />

                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={() => {
                                    charactersListHandler(c.url);
                                }}
                            >
                                open this card
                            </Button>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </div>
                ))}
            </List>
        );
    }
);

export default CharactersList;
