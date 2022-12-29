import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import About from './pages/About';
import Home from './pages/Home';
import injectContext from './store/AppContext';
import ThemeWrapper from './store/ThemeContext';

const Layout = () => {
    return (
        <ThemeWrapper>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </ThemeWrapper>
    )
}

export default injectContext(Layout);