import { AxiosError, AxiosResponse } from 'axios';
import HttpStatus from '../../constant/httpStatus';
import DataLocal from '../../constant/dataLocal';

type TODO = any;

export function mapData(res: AxiosResponse<TODO>) {
  return res.data;
}

export function mapError(err: AxiosError<TODO>) {
  if (
    err &&
    err.response &&
    err.response.status === HttpStatus.UN_AUTHOZIZATION
  ) {
    localStorage.removeItem(DataLocal.TOKEN_NAME);
    window.location.href = '/auth';
  } else if (err && err.response) {
    // message.error(err.response.data.message);
  }
  throw err;
}
