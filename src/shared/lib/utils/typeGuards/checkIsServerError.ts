import { TCustomError, TRtkErrorResponse } from '@/shared/types/api';

export const checkIsServerError = (errRes: TRtkErrorResponse): errRes is TCustomError => !!errRes && 'data' in errRes;
