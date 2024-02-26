import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

enum AppRoute {
  MAIN= 'main',
  ABOUT= 'about',
}

const RoutePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: `/${AppRoute.MAIN}`,
  [AppRoute.ABOUT]: `/${AppRoute.ABOUT}`,
}

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath.main,
    element: <MainPage/>,
  },
  {
    path: RoutePath.about,
    element: <AboutPage/>,
  }
];
