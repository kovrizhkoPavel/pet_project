import { MutableRefObject, useEffect } from 'react';

type TProps = {
  rootRef: MutableRefObject<HTMLElement>;
  observeRef: MutableRefObject<HTMLElement>;
  cb: VoidFunction;
}

export const useInfinityScroll = (props: TProps) => {
  const { rootRef, observeRef, cb } = props;

  useEffect(() => {
    const observeElm = observeRef.current;
    const rootElm = rootRef.current;
    const options = {
      root: rootElm,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(cb, options);
    observer.observe(observeElm);

    return () => {
      observer.unobserve(observeElm);
    };
  }, [rootRef, observeRef, cb]);
};
