import axios from "axios";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";

export const useAuth = () => {
  const history = useHistory();

  const login = useCallback(
    (id: string) => {
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            history.push("/home");
          } else {
            alert("Can't find the user.");
          }
        })
        .catch(() => alert("Can't login."));
    },
    [history]
  );
  return { login };
};
