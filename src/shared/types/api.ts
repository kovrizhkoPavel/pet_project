import { SerializedError } from '@reduxjs/toolkit';

export type TCustomError = {
  data: {
    error: string;
  },
  status: number
};

export type TRtkErrorResponse = TCustomError | SerializedError | undefined;
