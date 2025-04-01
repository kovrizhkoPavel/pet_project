import { Flex, TFlexProps } from '@/shared/ui/Stack/Flex/Flex';

type THStackProps = Omit<TFlexProps, 'direction'>;
export const VStack = (props: THStackProps) => (
  <Flex direction="column" {...props} />
);
