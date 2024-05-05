import Button from "../Button";
import storm from "../../assets/storm.png"

export default function Card(): JSX.Element {
  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="min-w-72 min-h-52 p-6 bg-modal bg-opacity-80 rounded-lg shadow-[1px_3px_8px_rgba(0,0,0,0.24)] flex items-center justify-center flex-col">
        <header className="font-bold text-gray-800">Tentaremos identificar o clima de sua região...</header>
        <div className="m-4 text-center">
          <img src={storm} className="w-52 p-8"/>
          <span className="text-gray-800">Tempestades</span>
        </div>
        <footer className="flex justify-center items-center flex-col pt-4 border-t-[1px] border-gray-300">
          <span className="font-bold text-gray-800">Acertamos o clima em sua região?</span>
          <div className="flex gap-4 p-4">
            <Button variant="primary" text="Correta" action={() => console.log('resposta certa')}/>
            <Button variant="primary" text="Errada" action={() => console.log('resposta errada')}/>
          </div>
        </footer>
      </div>
    </div>
  )
}