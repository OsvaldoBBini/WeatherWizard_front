import { useNavigate } from "react-router-dom";

export function useModal(): {
  sendToNotAllowPredictionPage: () => void,
} {

  const navigate = useNavigate();

  const sendToNotAllowPredictionPage = () => {
    navigate('/notAllow')
  };

  return {
    sendToNotAllowPredictionPage
  }
}