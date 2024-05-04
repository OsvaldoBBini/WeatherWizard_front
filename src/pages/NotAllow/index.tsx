import Button from "../../components/Button";
import { useNotAllow } from "./useNotAllow";

export default function NotAllow(): JSX.Element {

  const {
    sendToHomePage
  } = useNotAllow();

  return (
    <div className="flex items-center justify-center h-screen bg-primary-lighter">
      <div className="flex flex-col items-center">
        <h1 className="text-gray-800 font-bold text-8xl mb-8">Ops!</h1>
        <p className="text-gray-800">Não podemos realizar a predição porque não temos acesso a seus dados.</p>
        <p className="text-gray-800 font-bold mb-4">Tem certeza de sua decisão?</p>
        <Button variant='primary' text='Retornar ao Wizard' action={sendToHomePage}/>
      </div>
    </div>
  )
}