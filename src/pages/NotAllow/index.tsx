import Button from "../../components/Button";
import { useNotAllow } from "./useNotAllow";
import storm from '../../assets/storm.png'

export default function NotAllow(): JSX.Element {

  const {
    sendToHomePage
  } = useNotAllow();

  return (
    <div className="flex items-center justify-center h-screen bg-primary-lighter trasnsition animate-show">
      <div className="flex flex-col items-center w-[60%]">
        <img src={storm} className="w-50"/>
        <h1 className="text-gray-800 font-bold text-8xl mb-8">Ops!</h1>
        <p className="text-gray-800 text-center">We cannot identify the weather in your region without accessing your data</p>
        <p className="text-gray-800 text-center font-bold mb-4">Are you sure about your decision?</p>
        <Button className="pl-4 pr-4" variant='primary' text='Return to Wizard' onClick={sendToHomePage}/>
      </div>
    </div>
  )
}