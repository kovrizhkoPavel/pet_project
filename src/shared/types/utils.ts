import { FC, ReactNode, SVGProps } from 'react';

export type TObjectValue<T extends object> = T[keyof T];

export type TSvgIcon = FC<SVGProps<SVGSVGElement>>;

export type TOptionalLiteralKeys<T> = keyof {
  [K in keyof T as string extends K ? never : number extends K ? never :
  NonNullable<unknown> extends Pick<T, K> ? K : never]: 0
}

export type TOptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type TSortOrder = 'asc' | 'desc';

export type TWithChildren = { children: ReactNode };

export type TStyleMod = Record<string, boolean | string>;
