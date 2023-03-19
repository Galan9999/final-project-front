interface ErrorTypes {
  unauthorizedErrorMessage: string;
  defaultErrorMessage: string;
  userNotFoundErrorMessage: string;
  cuotesNotFoundErrorMessage: string;
  internalServerError: string;
}
export const errorTypes: ErrorTypes = {
  unauthorizedErrorMessage: "Invalid Credentials!",
  defaultErrorMessage: "Something Went Wrong!",
  userNotFoundErrorMessage: "Wrong Credentials!",
  cuotesNotFoundErrorMessage: "Page Not Found!",
  internalServerError: "Something Went Wrong!",
};

interface SuccesTypes {
  successDeleting: string;
}

export const succesTypes: SuccesTypes = {
  successDeleting: "Successfully deleted",
};
