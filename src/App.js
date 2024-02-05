import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";

function App() {
    return (
        <React.Fragment>
            <Router>
                <Routes>
                    <Route path="/main" element={<Blog />} />
                </Routes>
            </Router>
        </React.Fragment>
    );
}

export default App;
