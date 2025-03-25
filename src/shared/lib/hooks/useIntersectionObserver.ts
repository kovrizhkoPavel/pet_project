import { MutableRefObject, useEffect } from 'react';

type TProps = {
  rootRef: MutableRefObject<HTMLElement | null | undefined> | null;
  observeRef: MutableRefObject<HTMLElement | null | undefined>;
  cb: VoidFunction;
};

export const useIntersectionObserver = (props: TProps) => {
  const { rootRef, observeRef, cb } = props;

  useEffect(() => {
    const observeElm = observeRef?.current;
    const rootElm = rootRef?.current;
    let observer: IntersectionObserver;

    if (observeElm) {
      const options = {
        root: rootElm,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entre]) => {
        if (entre.isIntersecting) cb();
      }, options);
      observer.observe(observeElm);
    }

    return () => {
      if (observer && observeElm) observer.unobserve(observeElm);
    };
  }, [rootRef, observeRef, cb]);
};
