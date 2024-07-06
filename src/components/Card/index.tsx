import Button from "../Button";
import SuccesCard from "../SuccessCard";
import { useCallback, useEffect, useState } from "react";
import { useUpdateUserInfoMutation } from "../../services/userInfoService";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import toast from "react-hot-toast";
import { WrongAnswer } from "../WrongAnswer";
import cloudy from '../../assets/cloudy.png'
import rainy from '../../assets/rain.png'
import snow from '../../assets/snow.png'
import sunny from '../../assets/sun.png'
import { usePredictWeatherMutation } from "../../services/predictionService";
import Loader from "../Loader";

const possibleAnswers = {
  'cloudy': { icon: cloudy},
  'fog': { icon: cloudy},
  'rainy': { icon: rainy},
  'snow': { icon: snow},
  'sunny': { icon: sunny},
} as {[key: string]: {icon: string}}

export default function Card(): JSX.Element {

  const userId = useSelector((state: RootState) => state.user.userId);

  const [prediction, setPrediction] = useState<null | string>(null);
  const [answer, setAnswer] = useState<boolean | null>(null);

  const [predict, {isLoading: isLoadingPrediction, isError: isErrorPrediction}] = usePredictWeatherMutation();
  const [update, {isLoading: isLoadingUpdating, isError: isErrorUpdating, isSuccess: isSuccessUpdating}] = useUpdateUserInfoMutation();

  const handlePositiveAnswer = useCallback((value: boolean) => {
    setAnswer(value);
  }, [setAnswer]);

  const handleNegativeAnswer = useCallback(() => {
    setAnswer(false);
  }, [setAnswer]);

  const handleSubmitPositiveAnswer = useCallback(() => {
    const userInfos = {
      user_answer: true
    };
    update({userId, userInfos});
  }, [update, userId]);

  const handlePredictionResponse = useCallback( async () => {
    const data = await predict({userId}).unwrap();
    if (data) {
      setPrediction(data.predict);
    }
  }, [predict, userId]);

  useEffect(() => {handlePredictionResponse()}, [handlePredictionResponse]);

  useEffect(() => {
    if(isErrorUpdating){
      toast.error('It was not possible to send the response!');
    } 
    if(isErrorPrediction){
      toast.error('It was not possible predict your weather, sorry!! Try again later!!');
    } 
    if (isSuccessUpdating){
      setAnswer(isSuccessUpdating);
    }
  }, [isErrorPrediction, isErrorUpdating, isSuccessUpdating]);

  return (
    <div className="w-full flex justify-center items-center flex-col transition animate-show">
      <div className="w-10/12 sm:w-[26rem] min-h-52 p-6 bg-modal bg-opacity-80 rounded-lg shadow-[1px_3px_8px_rgba(0,0,0,0.24)] flex items-center justify-center flex-col">
        <header className="font-medium text-gray-800 text-center">We will attempt to identify the weather in your region....</header>
        <div className="m-4 text-center min-h-44 flex items-center justify-center flex-col gap-y-4">
          {isLoadingPrediction && <Loader className="w-14 h-14 border-slate-300 border-b-transparent"/>}
          {
            prediction && !isLoadingPrediction && 
            <>
              <img src={possibleAnswers[prediction.toLowerCase()].icon} className="w-52 p-8"/>
              <span className="text-gray-800 font-bold">{prediction.toUpperCase()}</span>
            </>
          }
        </div>
        <footer className="h-40 flex justify-center items-center flex-col border-t-[1px] border-gray-300">
          {answer === null && 
          <>
            <span className="font-medium text-gray-800 text-center">Did we correctly identify the weather in your region?</span>
            <div className="flex gap-4 p-4">
              <Button className="bg-success-main" 
                variant="primary"
                isLoading={isLoadingUpdating}
                text="Yes"
                onClick={handleSubmitPositiveAnswer}/>
                
              <Button className="bg-danger-main" 
                variant="primary"
                text="No" 
                onClick={handleNegativeAnswer}/>
            </div>
          </>
          }
          {answer === false && <WrongAnswer answer={answer} onAnswer={handlePositiveAnswer} possibleAnswers={possibleAnswers}/>}
          {answer && <SuccesCard answer={answer}/>}
        </footer>
      </div>
    </div>
  )
}