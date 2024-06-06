import Button from "../Button";
import storm from "../../assets/storm.png"
// import Loader from "../Loader";
import SuccesCard from "../SuccessCard";
import { useCallback, useEffect, useState } from "react";
import { useUpdateUserInfoMutation } from "../../services/userInfoService";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import toast from "react-hot-toast";
import { WrongAnswer } from "../WrongAnswer";

export default function Card(): JSX.Element {

  const userId = useSelector((state: RootState) => state.user.userId);
  const [answer, setAnswer] = useState<boolean | null>(null);

  const [update, {isLoading, isError, isSuccess}] = useUpdateUserInfoMutation();

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

  useEffect(() => {
    if(isError){
      toast.error('Não foi possível enviar a resposta!')
    } if (isSuccess){
      setAnswer(isSuccess);
    }
  }, [isError, isSuccess]);

  return (
    <div className="w-full flex justify-center items-center flex-col transition animate-show">
      <div className="w-1/4 min-h-52 p-6 bg-modal bg-opacity-80 rounded-lg shadow-[1px_3px_8px_rgba(0,0,0,0.24)] flex items-center justify-center flex-col">
        <header className="font-medium text-gray-800">Tentaremos identificar o clima de sua região...</header>
        <div className="m-4 text-center min-h-44 flex items-center justify-center flex-col gap-y-4">
          <img src={storm} className="w-52 p-8"/>
          <span className="text-gray-800 font-bold">Tempestades</span>
          {/* <Loader className="w-14 h-14 border-slate-300 border-b-transparent"/> */}
        </div>
        <footer className="h-32 flex justify-center items-center flex-col pt-4 border-t-[1px] border-gray-300">
          {answer === null && 
          <>
            <span className="font-medium text-gray-800">Acertamos o clima em sua região?</span>
            <div className="flex gap-4 p-4">
              <Button className="bg-success-main" 
                variant="primary"
                isLoading={isLoading}
                text="Sim"
                onClick={handleSubmitPositiveAnswer}/>
              <Button className="bg-danger-main" 
                variant="primary"
                text="Não" 
                onClick={handleNegativeAnswer}/>
            </div>
          </>
          }
          {answer === false && <WrongAnswer answer={answer} onAnswer={handlePositiveAnswer}/>}
          {answer && <SuccesCard answer={answer}/>}
        </footer>
      </div>
    </div>
  )
}