import {FC, Suspense} from 'react';
import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {className} from "shared/lib/classNames/className";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/route";

const App: FC = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={className('app', {hovered: true}, [theme, 'cls2'])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <Link to="/" children="main"/>
      <Link to="/about" children="about"/>
      <AppRouter/>
    </div>
  );
};

export default App;
