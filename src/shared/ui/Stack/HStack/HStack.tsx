import { Flex, TFlexProps } from 'shared/ui/Stack/Flex/Flex';

type THStackProps = Omit<TFlexProps, 'direction'>;
export const HStack = (props: THStackProps) => (
  <Flex direction="row" {...props} />
);
