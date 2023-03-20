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
  isSuccess: boolean;
}

export interface UiLoadingStructure {
  user: { isLogged: boolean; token: string };
  ui: {
    isLoading: boolean;
    modal: { isError: boolean; message: string; isSuccess: boolean };
  };
}

export interface NotLoggedUser {
  user: { isLogged: boolean; token: string };
  ui: {
    isLoading: boolean;
    modal: { isError: boolean; message: string };
  };
}

export interface QuoteStructure {
  id: string;
  author: string;
  image: string;
  country: string;
  quote: string;
  tags: string;
  lived: string;
  backgroundInfo: string;
}

export interface CreateQuoteStructure {
  author: string;
  image: string;
  country: string;
  quote: string;
  tags: string;
  lived: string;
  backgroundInfo: string;
}

export type QuotesStructure = QuoteStructure[];

export interface StoreStructure {
  user: { isLogged: boolean; token: string };
  ui: {
    isLoading: boolean;
    modal: { isError: boolean; message: string; isSuccess: boolean };
  };
  quotes: QuotesStructure;
}
