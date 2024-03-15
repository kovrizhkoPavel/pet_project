import { FC, SVGProps } from 'react';

export type TObjectValue<T extends object> = T[keyof T];

export type TSvgIcon = FC<SVGProps<SVGSVGElement>>;
