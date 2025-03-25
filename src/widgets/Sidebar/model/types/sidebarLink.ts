import { FC, SVGProps } from 'react';
import { TObjectValue } from '@/shared/types/utils';
import { RoutePath } from '@/shared/config/routeConfig/constants';

export type TSidebarLink = {
  path: TObjectValue<typeof RoutePath>;
  Icon: FC<SVGProps<SVGSVGElement>>;
  label: string;
};
