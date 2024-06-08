import Button from "../Button";
import sun from "../../assets/sun.png"
import { useModal } from "./useModal";

interface IModal {
  isOpen: boolean
}

export default function Modal({isOpen}: IModal) {

  const {
    sendToNotAllowPredictionPage,
    storeUserInfos,
    isLoading
  } = useModal();

  return (
    <div className={`${isOpen ? 'block' : 'hidden'} fixed left-0 top-0 h-[100%] w-[100%] bg-black bg-opacity-75`}>
      <div className="bg-modal rounded-lg w-[60%] absolute bottom-[20%] left-[20%] p-6 transition animate-show">
        <img src={sun} className="w-40 absolute right-[-60px] top-[-100px]"/>
        <header>
          <h1 className="font-bold text-left mb-4 text-xl text-gray-800">Welcome to WeatherWizard!!</h1>
        </header>
        <section className="mb-6">
            <p className="text-base text-gray-800 font-medium">
              This application will try to identify the weather in your region, but for that, we will need to collect some data
            </p>
            <p className="mb-4 text-xs text-gray-400">
              *Data to be collected: Latitude, Longitude, Browser, Device, and Operating System
            </p>
            <p className="mb-4 text-base text-gray-800 font-semibold">Ready to be amazed?</p>
        </section>
        <footer className="flex gap-4 justify-center sm:justify-end flex-wrap mb-2 pt-4 border-t-[1px] border-gray-300">
          <Button
            text="Proceed"
            variant={'primary'}
            onClick={storeUserInfos}
            isLoading={isLoading}/>
          <Button
            text="Don't allow"
            variant={'secondary'}
            onClick={sendToNotAllowPredictionPage}/>
        </footer>
      </div>
    </div>
  )

}