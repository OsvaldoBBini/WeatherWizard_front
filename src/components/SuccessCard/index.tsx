import checkCircle from '../../assets/check-circle.svg'

export default function SuccesCard(): JSX.Element {
  return(
    <div className="flex items-center justify-center gap-x-2 bg-success-main bg-opacity-40 border-2
       border-success-main rounded-lg p-6">
      <img src={checkCircle}/>
      <h1 className="font-medium text-gray-800">Obrigado pela sua resposta!!</h1>
    </div>
  )
}