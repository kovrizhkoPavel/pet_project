import {
  ChangeEvent, FC, ReactNode, UIEvent, useRef,
} from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useLocation } from 'react-router-dom';
import { useThrottle } from 'shared/lib/hooks/useThrottle';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getScrollPosition, scrollPositionActions } from 'features/SaveScrollPosition';
import { useSelector } from 'react-redux';
import { StateScheme } from 'shared/types/stateScheme';
import { useAppUseEffect } from 'shared/lib/hooks/useAppUseEffect';
import cls from './PageContainer.module.scss';

type TPageContainerProps = {
  className?: string;
  children: ReactNode;
}

const DELAY = 500;

export const PageContainer: FC<TPageContainerProps> = ({ className, children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const scrollPosition = useSelector(
    (state: StateScheme) => getScrollPosition(state, pathname),
  );

  const onScroll = useThrottle((evt: UIEvent<HTMLDivElement>) => {
    dispatch(scrollPositionActions.setPosition({
      path: pathname,
      position: evt.currentTarget.scrollTop,
    }));
  }, DELAY);

  useAppUseEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollTop = scrollPosition;
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      onScroll={onScroll}
      className={getClassName(cls.pageContainer, {}, [className])}
    >
      {children}
    </section>
  );
};
