import React, { useState } from "react";
import Item from "../components/Item";
import DropWrapper from "../components/DropWrapper";
import Col from "../components/Col";
import { data, statuses } from "../data";

const Homepage = () => {
    const [items, setItems] = useState(data);

 
  

    return (
        <div className={"row"}>
            {statuses.map(s => {
                return (
                    <div id="row">
                    <div id="rectangle" key={status} className={"col-wrapper"}>
                        <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
                        <DropWrapper  status={s.status}>
                        <Col>
                            {items
                                    .filter(i => i.status === s.status)
                                    .map((i, idx) => <Item key={i.id} item={i} index={idx}  status={s} />)
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

export default Homepage;
