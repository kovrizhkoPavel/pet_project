import {FC} from 'react';
import "./styles/index.scss"
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {getClassName} from "shared/lib/classNames/getClassName";
import {AppRouter} from "app/providers/route";
import {Navbar} from "widgets/Navbar";

const App: FC = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={getClassName('app', {hovered: true}, [theme, 'cls2'])}>
      <Navbar/>
      <button onClick={toggleTheme}>toggle theme</button>
      <AppRouter/>
    </div>
  );
};

export default App;
