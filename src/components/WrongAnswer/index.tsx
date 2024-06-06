import { useEffect, useRef } from "react";
import Button from "../Button";
import { useUpdateUserInfoMutation } from "../../services/userInfoService";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

interface ISelecet {
  answer: boolean,
  onAnswer: (value: boolean) => void;
}

export function WrongAnswer({answer, onAnswer}: ISelecet): JSX.Element {

  const selectRef = useRef<HTMLSelectElement>(null);
  const userId = useSelector((state: RootState) => state.user.userId);

  const [update, {isLoading, isError, isSuccess}] = useUpdateUserInfoMutation();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const selectValue = selectRef.current?.value;
    const userInfos = {
      user_answer: false,
      if_wrong_answer: selectValue
    };

    update({userId, userInfos});
  }

  useEffect(() => {
    if(isError){
      toast.error('Não foi possível enviar a resposta!')
    } if (isSuccess){
      onAnswer(isSuccess);
    }
  }, [isError, isSuccess, onAnswer]);

  return (
    <div className={`${!answer ? 'block' : 'hidden'} ${!answer && "animate-show"}`}>
      <form className="w-full mb-4 mt-4 flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-800">Ops, erramos!! Pode nos indicar o clima certo?</label>
        <select id="countries" className="mb-4 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" ref={selectRef} required>
          <option value={undefined}></option>
          <option value={"Chuvoso"}>Chuvoso</option>
          <option value={"Ensolarado"}>Ensolarado</option>
          <option value={"Tempestade"}>Tempestades</option>
          <option value={"Nublado"}>Nublado</option>
        </select>
        <Button isLoading={isLoading} variant="primary" text="Enviar" type="submit"/>
      </form>
    </div>
  )
}