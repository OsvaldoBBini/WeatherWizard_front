import checkCircle from '../../assets/check-circle.svg'

interface ISuccessCard {
  answer: boolean
}

export default function SuccesCard({answer}: ISuccessCard): JSX.Element {
  return(
    <div className={`${answer ? 'flex' : 'hidden'} items-center justify-center gap-x-2 bg-success-main bg-opacity-40 border-2 border-success-main rounded-lg p-6 transition ${answer && "animate-show"}`}>
      <img src={checkCircle}/>
      <h1 className="font-medium text-gray-800">Obrigado pela sua resposta!!</h1>
    </div>
  )
}