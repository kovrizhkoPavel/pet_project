import {FC, Suspense} from 'react';
import "./index.scss"
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";

const App: FC = () => {
  return (
    <div className="app">
      <Link to="/" children="main"/>
      <Link to="/about" children="about"/>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync/>}/>
          <Route path="/about" element={<AboutPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
