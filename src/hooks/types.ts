interface ErrorTypes {
  unauthorizedErrorMessage: string;
  defaultErrorMessage: string;
  userNotFoundErrorMessage: string;
  cuotesNotFoundErrorMessage: string;
  internalUserServerError: string;
}
export const errorTypes: ErrorTypes = {
  unauthorizedErrorMessage: "Invalid Credentials!",
  defaultErrorMessage: "Something Went Wrong!",
  userNotFoundErrorMessage: "Wrong Credentials!",
  cuotesNotFoundErrorMessage: "Page Not Found!",
  internalUserServerError: "Something Went Wrong!",
};
