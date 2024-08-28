import { TObjectValue } from 'shared/types/types';
import { RoutePath } from 'shared/config/routeConfig/constants';
import { FC, SVGProps } from 'react';

export type TSidebarLink = {
  path: TObjectValue<typeof RoutePath>;
  Icon: FC<SVGProps<SVGSVGElement>>;
  label: string;
}
