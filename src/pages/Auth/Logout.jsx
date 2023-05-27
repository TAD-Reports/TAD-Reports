import { useStateContext } from "../../contexts/ContextProvider";

const Logout = () => {
  const { setAuth } = useStateContext();
  setAuth(false);
};

export default Logout;
