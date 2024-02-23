import {FC, Suspense} from 'react';
import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {className} from "./helpers/classNames/className";

const App: FC = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={className('app', {hovered: true}, [theme, 'cls2'])}>
      <button onClick={toggleTheme}>toggle theme</button>
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
