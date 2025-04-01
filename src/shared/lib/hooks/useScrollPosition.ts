import { RefObject, UIEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateScheme } from '@/shared/types/stateScheme';
import {
  getScrollPosition,
  scrollPositionActions,
} from '@/shared/models/SaveScrollPosition';
import { useAppDispatch } from './useAppDispatch';
import { useThrottle } from './useThrottle';
import { useAppUseEffect } from './useAppUseEffect';

const DELAY = 500;

export const useScrollPosition = (ref: RefObject<HTMLElement>) => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const scrollPosition = useSelector((state: StateScheme) =>
    getScrollPosition(state, pathname),
  );

  const onScroll = useThrottle((evt: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollPositionActions.setPosition({
        path: pathname,
        position: evt.currentTarget.scrollTop,
      }),
    );
  }, DELAY);

  useAppUseEffect(() => {
    if (ref.current) {
      // eslint-disable-next-line no-param-reassign
      ref.current.scrollTop = scrollPosition;
    }
  }, []);

  return onScroll;
};
