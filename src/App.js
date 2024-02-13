import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import Register from "./pages/Register";
import Header from "./components/Header";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";

function App() {
    return (
        <React.Fragment>
            <Header/>
            <Router>
                <Routes>
                    <Route path="/" element={<Blog />}/>                {/*메인*/}
                    <Route path="/login" element={<Login/>}/>           {/*로그인*/}
                    <Route path="/sign-up" element={<SignUp/>}/>        {/*회원가입*/}
                    <Route path="/register" element={<Register />}/>    {/*글등록*/}
                    <Route path="/detail/:id" element={<Detail />} />   {/*Detail 페이지 추가*/}
                </Routes>
            </Router>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
