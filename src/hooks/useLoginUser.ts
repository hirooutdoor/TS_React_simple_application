import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserConetxtType
} from "../providers/LoginUserProvider";

export const useLoginUser = (): LoginUserConetxtType =>
  useContext(LoginUserContext);
