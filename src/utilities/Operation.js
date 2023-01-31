export const Succeed = (message, object) => {
  return {
    success: true,
    operationDate: new Date(),
    message: message === undefined ? "" : message,
    status: 200,
    object: object === undefined ? {} : object,
  };
};
export const Failed = (message, status, object) => {
  return {
    success: false,
    operationDate: new Date(),
    message: message === undefined ? "" : message,
    status: status === undefined ? 400 : status,
    object: object === undefined ? {} : object,
  };
};
