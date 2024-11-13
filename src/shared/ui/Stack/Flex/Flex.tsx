import { getClassName } from 'shared/lib/classNames/getClassName';
import { TWithChildren } from 'shared/types/types';
import cls from './Flex.module.scss';
import {
  TFlexAlign, TFlexDirections, TFlexGap, TFlexJustify, TFlexWrap,
} from './types';

type TFlexProps = {
  direction: TFlexDirections;
  stretch?: boolean;
  className?: string;
  wrap?: TFlexWrap;
  justify?: TFlexJustify;
  align?: TFlexAlign;
  gap?: TFlexGap;
} & TWithChildren;

const justifyClasses: Record<TFlexJustify, string> = {
  start: cls.justifyStart,
  end: cls.justifyEnd,
  spaceBetween: cls.justifySpaceBetween,
  spaceAround: cls.justifyAround,
  center: cls.justifyCenter,
};

const alignClasses: Record<TFlexAlign, string> = {
  start: cls.alignStart,
  end: cls.alignEnd,
  center: cls.alignCenter,
  stretch: cls.alignStretch,
  baseline: cls.alignBaseline,
};

const wrapClasses: Record<TFlexWrap, string> = {
  wrap: cls.wrap,
  nowrap: cls.nowrap,
  wrapReverse: cls.wrapReverse,
};

const directionClasses: Record<TFlexDirections, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
  rowReverse: cls.directionRowReverse,
  columnReverse: cls.directionColumnReverse,
};

const gapClasses: Record<TFlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  12: cls.gap12,
  16: cls.gap16,
  20: cls.gap20,
  24: cls.gap24,
  32: cls.gap32,
};

export const Flex = (props: TFlexProps) => {
  const {
    className,
    align = 'start',
    wrap = 'wrap',
    direction = 'row',
    justify = 'start',
    stretch,
    gap,
    children,
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    wrapClasses[wrap],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mod = {
    [cls.stretch]: !!stretch,
  };

  return (
    <div className={getClassName(cls.flex, mod, classes)}>
      {children}
    </div>
  );
};
