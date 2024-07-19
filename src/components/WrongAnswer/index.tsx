import { useEffect, useRef } from "react";
import Button from "../Button";
import { useUpdateUserInfoMutation } from "../../services/userInfoService";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

interface ISelecet {
  prediction: string | null,
  answer: boolean,
  onAnswer: (value: boolean) => void;
  possibleAnswers: {[key: string]: {icon: string}}
}

export function WrongAnswer({prediction, answer, onAnswer, possibleAnswers}: ISelecet): JSX.Element {

  const selectRef = useRef<HTMLSelectElement>(null);
  const userId = useSelector((state: RootState) => state.user.userId);

  const [update, {isLoading, isError, isSuccess}] = useUpdateUserInfoMutation();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const selectValue = selectRef.current?.value;
    const userInfos = {
      answer: prediction,
      user_answer: false,
      if_wrong_answer: selectValue
    };

    update({userId, userInfos});
  }

  useEffect(() => {
    if(isError){
      toast.error('It was not possible to send the response!')
    } if (isSuccess){
      onAnswer(isSuccess);
    }
  }, [isError, isSuccess, onAnswer]);

  return (
    <div className={`${!answer ? 'block' : 'hidden'} ${!answer && "animate-show"}`}>
      <form className="w-full flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="countries" className="block mt-8 mb-2 text-sm font-medium text-gray-800 text-center">Oops, we made a mistake! Could you indicate the correct weather?</label>
        <select id="countries" className="mb-4 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" ref={selectRef} required>
          <option value={undefined}></option>
          {Object.keys(possibleAnswers).map((key) => 
            <option value={key} key={key}>{key.toUpperCase()}</option>
          )}
        </select>
        <Button isLoading={isLoading} variant="primary" text="Enviar" type="submit"/>
      </form>
    </div>
  )
}

