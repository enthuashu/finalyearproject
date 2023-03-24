import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// import Axios from "axios";
import PropTypes from "prop-types";
import axios from "axios";
import { toast } from "react-toastify";
const authContext = createContext();

function useProvideAuth() {
  const [user, setuser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signOut = async () => {
    try {
      const response = await axios.get("/api/user/logout");
      if (response.data.success) {
        setuser(null);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        return toast.error(error.response.data.error);
      }
    }
  };
  const getUser = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/user/current");
      if (response.data.success) {
        setuser(response.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      if (error.response && error.response.data) {
        return toast.error(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return {
    user,
    setuser,
    isLoading,
    setIsLoading,
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
