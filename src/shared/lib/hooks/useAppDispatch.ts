import { useDispatch } from 'react-redux';
import { createReduxStore } from '@/app/providers/StoreProvider';

export const useAppDispatch = () =>
  useDispatch<ReturnType<typeof createReduxStore>['dispatch']>();
