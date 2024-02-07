import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import Registration from "./pages/Registration";

function App() {
    return (
        <React.Fragment>
            <Router>
                <Routes>
                    <Route path="/" element={<Blog />} />
                    <Route path="/registration" element={<Registration />} />
                </Routes>
            </Router>
        </React.Fragment>
    );
}

export default App;
