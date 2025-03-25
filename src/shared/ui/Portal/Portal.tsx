import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type TPortalProps = {
  children: ReactNode;
  domNode?: HTMLElement;
};
const Portal: FC<TPortalProps> = (props) => {
  const { children, domNode = document.body } = props;
  return createPortal(children, domNode);
};

export default Portal;
