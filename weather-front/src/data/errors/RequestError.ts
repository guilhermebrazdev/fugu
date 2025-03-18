import { ErrorBase, ErrorBaseType } from "./ErrorBase";

interface RequestErrorType extends ErrorBaseType<ErrorName> {
  success?: boolean;
}

type ErrorName = "UNKOWN_ERROR" | "API_RESPONSE_ERROR";

class RequestError extends ErrorBase<ErrorName> {
  success?: boolean;

  constructor({ name, message, error, success }: RequestErrorType) {
    super({ name, message, error });
    this.success = success;
  }
}

export { RequestError };
