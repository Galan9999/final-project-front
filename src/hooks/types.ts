interface ErrorTypes {
  unauthorizedErrorMessage: string;
  defaultErrorMessage: string;
  userNotFoundErrorMessage: string;
  cuotesNotFoundErrorMessage: string;
  internalServerError: string;
  createError: string;
}
export const errorTypes: ErrorTypes = {
  unauthorizedErrorMessage: "Invalid Credentials!",
  defaultErrorMessage: "Something Went Wrong!",
  userNotFoundErrorMessage: "Wrong Credentials!",
  cuotesNotFoundErrorMessage: "Page Not Found!",
  internalServerError: "Something Went Wrong!",
  createError: "Couldn't create!",
};

interface SuccesTypes {
  successDeleting: string;
  successCreating: string;
}

export const succesTypes: SuccesTypes = {
  successDeleting: "Successfully deleted!",
  successCreating: "Successfully created!",
};
