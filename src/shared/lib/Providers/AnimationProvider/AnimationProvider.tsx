import {
  createContext, useContext, useEffect, useMemo, useRef, useState,
} from 'react';
import { TWithChildren } from '@/shared/types/utils';

type TSpring = typeof import('@react-spring/web');
type TGesture = typeof import('@use-gesture/react');

type TAnimationProviderProps = {
  Spring?: TSpring;
  Gesture?: TGesture;
  isLoaded?: boolean;
};

const AnimationContext = createContext<TAnimationProviderProps>({});

const getAsyncAnimationModules = async () => Promise.all([
  import('@react-spring/web'),
  import('@use-gesture/react'),
]);

export const useAnimationLibs = () => useContext(AnimationContext) as Required<TAnimationProviderProps>;

export const AnimationProvider = ({ children }: TWithChildren) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const springRef = useRef<TSpring>();
  const gestureRef = useRef<TGesture>();

  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      springRef.current = Spring;
      gestureRef.current = Gesture;
      setIsLoaded(true);
    });
  }, []);

  const value = useMemo<TAnimationProviderProps>(() => ({
    Spring: springRef.current,
    Gesture: gestureRef.current,
    isLoaded,
  }), [isLoaded]);

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};
