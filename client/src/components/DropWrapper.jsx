
import React from "react";
import { useDrop } from "react-dnd";
import ITEM_TYPE from "../data/types";
import { statuses } from "../data";

const DropWrapper = ({ children, status }) => {
 
    const [ drop] = useDrop({
        
        accept: ITEM_TYPE,
        canDrop: (item) => {
            const itemIndex = statuses.findIndex(si => si.status === item.status);
            const statusIndex = statuses.findIndex(si => si.status === status);
            return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
        }
    });

    return (
        <div ref={drop} className={"drop-wrapper"}>
            {React.cloneElement(children)}
        </div>
    )
};

export default DropWrapper;