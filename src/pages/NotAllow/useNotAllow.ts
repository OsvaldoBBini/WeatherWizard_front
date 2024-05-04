import { useNavigate } from "react-router-dom";

export function useNotAllow (): {
  sendToHomePage: () => void
}{

  const navigate = useNavigate();

  const sendToHomePage = () => navigate('/');

  return {
    sendToHomePage
  }
}