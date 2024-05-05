import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { browserName, osName, deviceType } from 'react-device-detect';
import { useStoreUserInfoMutation } from "../../services/userInfoService";
import toast from "react-hot-toast";

export function useModal(): {
  sendToNotAllowPredictionPage: () => void,
  storeUserInfos: () => void,
  isLoading: boolean
} {

  const navigate = useNavigate();
  const location = window.navigator.geolocation;

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
  
  const getUserLocation = useCallback(() => {
    location.getCurrentPosition(
      ({coords, timestamp}) => {
        const {latitude, longitude} = coords;
        setLatitude(String(latitude));
        setLongitude(String(longitude));
        setTimestamp(String(timestamp));
      });
    },[location]);
    
  useEffect(() => {
    getUserLocation();
  }, [getUserLocation, latitude, longitude]);

  const storeUserInfos = useCallback(() => {
    const userInfos = {
      latitude,
      longitude,
      timestamp,
      browser,
      device,
      os
    };
    store({userInfos});
  }, [browser, device, latitude, longitude, os, store, timestamp]);

  useEffect(() => {
    if(isError){
      toast.error('Não foi possível obter seus dados!')
    }
    if (isSuccess){
      toast.success('Obrigado por nos fornecer seus dados!')
    }
  }, [isError, isSuccess])

  return {
    sendToNotAllowPredictionPage,
    storeUserInfos,
    isLoading,
  }
}