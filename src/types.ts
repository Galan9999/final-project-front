export interface User {
  token: string;
}

export interface UserState extends User {
  isLogged: boolean;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface UiStructure {
  isLoading: boolean;
  modal: ModalStructure;
}

export interface ModalStructure {
  message: string;
  isError: boolean;
}

export interface UiLoadingStructure {
  user: { isLogged: false; token: string };
  ui: {
    isLoading: true;
    modal: { isError: false; message: string };
  };
}
