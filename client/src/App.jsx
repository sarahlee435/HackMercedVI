import React from "react";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Button from "./components/Button";

const App = () => {
    return (
        <DndProvider backend={Backend}>
            <Header />
            <Button/>
            <Homepage />
        
        </DndProvider>
    );z
};

export default App;