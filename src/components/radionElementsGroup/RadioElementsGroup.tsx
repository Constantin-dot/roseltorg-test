import React, { ChangeEvent } from "react";
import classes from "./RadioElementsGroup.module.scss";
import FormControl from "@material-ui/core/FormControl/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel/FormLabel";
import Radio from "@material-ui/core/Radio/Radio";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";

type PropsType = {
    groupName: string;
    items: string[];
    changeHandler: (e: ChangeEvent<any>) => void;
};

const RadioElementsGroup: React.FC<PropsType> = ({
    groupName,
    items,
    changeHandler,
}) => {
    return (
        <FormControl component="fieldset" className={classes.wrapper}>
            <FormLabel component="legend">{groupName}</FormLabel>
            <RadioGroup
                aria-label={groupName.toLowerCase()}
                name={groupName.toLowerCase()}
                onChange={changeHandler}
            >
                {items.map((i) => (
                    <FormControlLabel
                        key={i.indexOf(i)}
                        value={i.toLowerCase()}
                        control={<Radio />}
                        label={i}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default RadioElementsGroup;
