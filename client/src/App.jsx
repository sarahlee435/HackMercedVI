import React from "react";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Button from "./components/Button";
import Homepage2 from "./pages/Homepage2";

const App = () => {
    return (
        <DndProvider backend={Backend}>
            <Header />
            <Button/>
            <Homepage />
            <Homepage2 />
        
        </DndProvider>
    );z
};

export default App;