export class ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T | null;
  error: T | null;

  constructor(
    success: boolean,
    data: T | null = null,
    error: T | null = null,
    message?: string,
  ) {
    this.success = success;
    this.data = data;
    this.message = message;
    this.error = error;
  }

  static success<T>(data: T, message?: string): ApiResponse<T> {
    return new ApiResponse<T>(true, data, null, message);
  }

  static error<T>(message: string, error: T | null): ApiResponse<T> {
    return new ApiResponse<T>(false, null, error, message);
  }
}
