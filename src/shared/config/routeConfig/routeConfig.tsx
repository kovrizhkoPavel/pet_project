import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {TObjectValue} from "shared/types/types";

const AppRoute = {
  MAIN: 'main',
  ABOUT: 'about',
} as const;

type TAppRouteValues = TObjectValue<typeof AppRoute>;

const RoutePath: Record<TAppRouteValues, string> = {
  [AppRoute.MAIN]: `/`,
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
