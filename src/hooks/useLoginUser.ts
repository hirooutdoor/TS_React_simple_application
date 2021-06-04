import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserConetxtType
} from "../components/providers/LoginUserProvider";

export const useLoginUser = (): LoginUserConetxtType =>
  useContext(LoginUserContext);
