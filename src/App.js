import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import DetailView from "./views/DetailView";

const App = () => {
  return (
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/detail/:id" element={<DetailView />} />
      </Routes>
  </BrowserRouter>
  );
};


export default App;
