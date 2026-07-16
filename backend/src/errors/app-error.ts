export class AppError extends Error {
    constructor(
      public readonly message: string,
      public readonly statusCode = 500,
    ) {
      super(message);
  
      Object.setPrototypeOf(this, AppError.prototype);
    }
  }