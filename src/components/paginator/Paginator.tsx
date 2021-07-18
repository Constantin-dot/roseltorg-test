import React, { ChangeEvent, useState } from "react";
import classes from "./Paginator.module.scss";
import Button from "@material-ui/core/Button/Button";
import { Input } from "../input/Input";

type PaginatorPropsType = {
    currentPage: number;
    itemsTotalCount: number;
    pageCount: number;
    changePage: (page: number) => void;
};

export const Paginator: React.FC<PaginatorPropsType> = React.memo(
    ({ currentPage, pageCount, changePage, itemsTotalCount }) => {
        const [pageNumber, setPageNumber] = useState(currentPage);

        const onePreviousPage = () => {
            changePage(pageNumber - 1);
            setPageNumber(pageNumber - 1);
        };
        const pageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setPageNumber(+e.currentTarget.value);
        };

        const pageSetHandler = () => {
            if (pageNumber < 1) {
                changePage(1);
                setPageNumber(1);
            } else if (pageNumber > pageCount) {
                changePage(pageCount);
                setPageNumber(pageCount);
            } else {
                changePage(pageNumber);
            }
        };
        const oneNextPage = () => {
            changePage(pageNumber + 1);
            setPageNumber(pageNumber + 1);
        };

        const onKeyPressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === "Enter") {
                pageSetHandler();
            }
        };

        return (
            <div className={classes.paginator}>
                <div className={classes.leftBlock}>
                    <p>{`Total pages: ${pageCount}. Total characters: ${itemsTotalCount}.`}</p>
                </div>
                <div className={classes.rightBlock}>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={onePreviousPage}
                        disabled={currentPage < 2}
                    >
                        Prev
                    </Button>
                    <span>{`Page: `}</span>
                    <Input
                        type={"number"}
                        value={currentPage}
                        step={1}
                        min={1}
                        max={pageCount}
                        onChange={pageChangeHandler}
                        onBlur={pageSetHandler}
                        onKeyPress={onKeyPressHandler}
                    />
                    <span>of {pageCount}</span>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={oneNextPage}
                        disabled={currentPage === pageCount}
                    >
                        Next
                    </Button>
                </div>
            </div>
        );
    }
);
