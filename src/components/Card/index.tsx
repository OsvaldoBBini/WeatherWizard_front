import Button from "../Button";
import storm from "../../assets/storm.png"
// import Loader from "../Loader";
import SuccesCard from "../SuccessCard";
import { useState } from "react";

export default function Card(): JSX.Element {

  const [answer, setAnswer] = useState<boolean>(false);

  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="min-w-72 min-h-52 p-6 bg-modal bg-opacity-80 rounded-lg shadow-[1px_3px_8px_rgba(0,0,0,0.24)] flex items-center justify-center flex-col">
        <header className="font-medium text-gray-800">Tentaremos identificar o clima de sua região...</header>
        <div className="m-4 text-center min-h-44 flex items-center justify-center flex-col gap-y-4">
          <img src={storm} className="w-52 p-8"/>
          <span className="text-gray-800 font-bold">Tempestades</span>
          {/* <Loader className="w-14 h-14 border-slate-300 border-b-transparent"/> */}
        </div>
        <footer className="flex justify-center items-center flex-col pt-4 border-t-[1px] border-gray-300">
          {answer && <SuccesCard/>}
          {!answer && 
          <>
            <span className="font-medium text-gray-800">Acertamos o clima em sua região?</span>
            <div className="flex gap-4 p-4">
              <Button className="bg-success-main" 
                variant="primary"
                text="Sim"
                action={() => setAnswer(true)}/>
              <Button className="bg-danger-main" 
                variant="primary"
                text="Não" 
                action={() => setAnswer(true)}/>
            </div>
          </>
          }
        </footer>
      </div>
    </div>
  )
}