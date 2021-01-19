import { toast } from 'react-toastify';

const options = {
  autoClose: 3000,
  className: '',
  position: toast.POSITION.TOP_RIGHT,
  maxOpened: 1,
};

export const toastSuccess = message => {
  toast.success(message, options);
};

export const toastError = message => {
  toast.error(message, options);
};

export const toastDefault = message => {
  toast(message, options);
};
