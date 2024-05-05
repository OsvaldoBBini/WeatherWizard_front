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
      <div className="bg-modal rounded-lg w-[60%] absolute bottom-[20%] left-[20%] p-4">
        <img src={sun} className="w-40 absolute right-[-60px] top-[-100px]"/>
        <header>
          <h1 className="font-bold text-left mb-4 text-xl text-gray-800">Bem Vindo ao Weather Wizard!!</h1>
        </header>
        <section className="mb-6">
            <p className="text-base text-gray-800 font-medium">
              Esta aplicação irá tentar identificar o clima em sua região, porém para isso precisaremos coletar alguns dados
            </p>
            <p className="mb-4 text-xs text-gray-400">
              *Dados a serem coletados: Latitude, Longitude, Navegador, Dispositivo e Sistema Operacional
            </p>
            <p className="mb-4 text-base text-gray-800 font-semibold">Pronto para se surpreender?</p>
        </section>
        <footer className="flex gap-x-4 justify-end mb-2 pt-4 border-t-[1px] border-gray-300">
          <Button
            text="Avançar"
            variant={'primary'}
            action={storeUserInfos}
            isLoading={isLoading}/>
          <Button
            text="Não Permitir"
            variant={'secondary'}
            action={sendToNotAllowPredictionPage}/>
        </footer>
      </div>
    </div>
  )

}