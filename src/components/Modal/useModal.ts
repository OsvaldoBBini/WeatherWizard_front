import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { browserName, osName, deviceType } from 'react-device-detect';
import { useStoreUserInfoMutation } from "../../services/userInfoService";

export function useModal(): {
  sendToNotAllowPredictionPage: () => void,
  storeUserInfos: () => void,
  isLoading: boolean,
  isError: boolean,
  isSuccess: boolean
} {

  const navigate = useNavigate();

  const [store, {isLoading, isError, isSuccess}] = useStoreUserInfoMutation();

  const [latitude, setLatitude] = useState<string | null>(null);
  const [longitude, setLongitude] = useState<string | null>(null);
  const [timestamp, setTimestamp] = useState<string | null>(null);

  const browser = browserName;
  const os = osName;
  const device = deviceType;
  
  const sendToNotAllowPredictionPage = () => {
    navigate('/notAllow')
  };

  const getUserLocation = () => {
    const location = window.navigator && window.navigator.geolocation;
    location.getCurrentPosition( ({coords, timestamp}) => {
      const {latitude, longitude} = coords;
      setLatitude(String(latitude));
      setLongitude(String(longitude));
      setTimestamp(String(timestamp));
    });
  }

  const storeUserInfos = () => {
    getUserLocation();
    const userInfos = {
      latitude,
      longitude,
      timestamp,
      browser,
      device,
      os
    };
    store({userInfos});
  }

  return {
    sendToNotAllowPredictionPage,
    storeUserInfos,
    isLoading,
    isError,
    isSuccess
  }
}