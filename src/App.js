import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutView from './views/LayoutView';
import GalleryList from './views/gallery/GalleryList';
import GalleryDetail from './views/gallery/GalleryDetail';
import NoticeDetail from './views/notice/NoticeDetail';
import { StrictMode } from 'react';

const App = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayoutView />} />
                    <Route path="/gallery" element={<GalleryList />} />
                    <Route path="/gallery/:id" element={<GalleryDetail />} />
                    <Route path="/notice/:id" element={<NoticeDetail />} />
                </Routes>
            </BrowserRouter>
        </StrictMode>
    );
};

export default App;
