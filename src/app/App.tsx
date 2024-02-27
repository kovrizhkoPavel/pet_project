import {FC} from 'react';
import "./styles/index.scss"
import {useTheme} from "app/providers/ThemeProvider";
import {getClassName} from "shared/lib/classNames/getClassName";
import {AppRouter} from "app/providers/route";
import {Navbar} from "widgets/Navbar";

const App: FC = () => {
  const {theme} = useTheme();
  return (
    <div className={getClassName('app', {hovered: true}, [theme, 'cls2'])}>
      <Navbar/>
      <AppRouter/>
    </div>
  );
};

export default App;
