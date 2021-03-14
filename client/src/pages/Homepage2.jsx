import React, { useState } from "react";
import Item from "../components/Item";
import DropWrapper from "../components/DropWrapper";
import Col from "../components/Col";
import { data, statuses2 } from "../data";

const Homepage2 = () => {
    const [items, setItems] = useState(data);

    const onDrop = (item, monitor, status) => {
        const mapping = statuses.find(si => si.status === status);

        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.status !== item.status)
                .concat({ ...item, status, icon: mapping.icon });
            return [ ...newItems ];
        });
    };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return  [ ...newItems ];
        });
    };

    return (
        <div className={"row"}>
            {statuses2.map(s => {
                return (
                    <div id="row">
                    <div id="rectangle" key={status} className={"col-wrapper"}>
                        <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
                        <DropWrapper onDrop={onDrop} status={s.status}>
                        <Col>
                            {items
                                    .filter(i => i.status === s.status)
                                    .map((i, idx) => <Item key={i.status} item={i} index={idx} moveItem={moveItem} status={s} />)
                                }
                            </Col>
                          
                        </DropWrapper>
                    </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Homepage2;
