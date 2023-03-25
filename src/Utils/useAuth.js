import React, { useState, useEffect, useContext, createContext } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

const authContext = createContext();

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [isUser, setIsUser] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useHistory();

  const [sessionExpire, setSessionExpire] = useState(false);

  const signOut = async () => {
    await axios
      .get(`/api/user/logout`)
      .then((res) => {
        if (res.data.success) {
          navigate.push("/");
          setIsUser(false);
          setUser(null);
        }
      })
      .catch(() => {
        navigate.push("/");
      });
  };
  async function getUser() {
    setIsLoading(true);
    await axios({
      method: "get",
      url: `/api/user/current`,
    })
      .then((res) => {
        setUser(res.data);
        setIsUser(true);
        setIsLoading(false);
      })
      .catch(() => {
        setIsUser(false);
        setUser(null);
        setIsLoading(false);
      });
  }
  useEffect(() => {
    getUser();
  }, []);

  return {
    isUser,
    user,
    setUser,
    signOut,
    sessionExpire,
    setSessionExpire,
    getUser,
    isLoading,
  };
}
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
ProvideAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(authContext);
