import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutView from "./views/LayoutView";
import GalleryDetailView from "./views/gallery/GalleryDetailView";
import NoticeDetailView from "./views/notice/NoticeDetailView";

const App = () => {
  return (
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<LayoutView />} />
          <Route path="/gallery/:id" element={<GalleryDetailView />} />
          <Route path="/notice/:id" element={<NoticeDetailView />} />
      </Routes>
  </BrowserRouter>
  );
};


export default App;
