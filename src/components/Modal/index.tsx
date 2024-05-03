import Button from "../Button";

export default function Modal() {

  return (
    <div className="fixed left-0 top-0 h-[100%] w-[100%] bg-black bg-opacity-75">
      <div className="bg-modal rounded-lg w-[60%] absolute bottom-[20%] left-[20%] p-4">
        <div className="mb-6">
          <h1 className="font-bold text-left mb-4 text-xl">Bem Vindo ao Weather Wizard!!</h1>
          <p className="mb-4 text-base">
            Para avançarmos precisamos que você nos de permissão para
            pegarmos algumas informações suas, sendo elas latitude, longitude,
            qual o seu dispositivo de acesso, navegador e sistema operacional
          </p>
          <p className="mb-4 text-base">Eai, pronto para começar?</p>
        </div>
        <div className="flex gap-x-4 justify-end mb-2">
          <Button text="Avançar" type={'primary'}/>
          <Button text="Não Concordo" type={'secondary'}/>
        </div>
      </div>
    </div>
  )

}