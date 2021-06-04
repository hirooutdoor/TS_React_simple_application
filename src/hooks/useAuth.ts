//custom hook

import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import {} from "../hooks/useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: "Successfuly loged in!", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "Can't find the user.", status: "error" });
          }
        })
        .catch(() =>
          showMessage({ title: "Failed to login.", status: "error" })
        )
        .finally(() => setLoading(false));
    },
    [history, showMessage]
  );
  return { login, loading };
};
