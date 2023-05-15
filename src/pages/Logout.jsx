import { useStateContext } from "../contexts/ContextProvider";

const Logout = () => {
  const { setAuth } = useStateContext();
  setAuth(false);
  return;
};

export default Logout;
