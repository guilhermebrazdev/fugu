interface ErrorBaseType<T> {
  name: T;
  message: string;
  error?: any;
}

class ErrorBase<T extends string> extends Error {
  name: T;
  message: string;
  error: any;

  constructor({ name, message, error }: ErrorBaseType<T>) {
    super();
    this.name = name;
    this.message = message;
    this.error = error;
  }
}

export type { ErrorBaseType };
export { ErrorBase };
