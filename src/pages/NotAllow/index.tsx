import Button from "../../components/Button";
import { useNotAllow } from "./useNotAllow";
import storm from '../../assets/storm.png'

export default function NotAllow(): JSX.Element {

  const {
    sendToHomePage
  } = useNotAllow();

  return (
    <div className="flex items-center justify-center h-screen bg-primary-lighter">
      <div className="flex flex-col items-center w-[60%]">
        <img src={storm} className="w-50"/>
        <h1 className="text-gray-800 font-bold text-8xl mb-8">Ops!</h1>
        <p className="text-gray-800 text-center">Não podemos identificar o clima em sua região sem termos acesso a seus dados.</p>
        <p className="text-gray-800 text-center font-bold mb-4">Tem certeza de sua decisão?</p>
        <Button variant='primary' text='Retornar ao Wizard' action={sendToHomePage}/>
      </div>
    </div>
  )
}