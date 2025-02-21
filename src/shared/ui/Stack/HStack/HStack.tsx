import { Flex, TFlexProps } from '@/shared/ui/Stack/Flex/Flex';
import { TDivProps } from '@/shared/types/utils';

type THStackProps = Omit<TFlexProps, 'direction'> & TDivProps;
export const HStack = (props: THStackProps) => (
  <Flex direction="row" {...props} />
);
