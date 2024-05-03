
interface IButton {
  text: string,
  type: string
}

export default function Button({text, type}: IButton): JSX.Element {
  return(
    <button className={`w-32 h-10 ${type === 'secondary' ? 'bg-gray-700' : 'bg-primary-main'} text-slate-200 ${type === 'secondary' ? 'font-medium' : 'font-bold'} rounded-lg shadow-[3.0px_4.0px_2.0px_rgba(0,0,0,0.38)] hover:-translate-y-1 hover:shadow-[5.0px_7.0px_2.0px_rgba(0,0,0,0.38)] active:translate-y-1 active:shadow-[2.0px_4.0px_2.0px_rgba(0,0,0,0.38)]  transition-all`}>
      {text}
    </button>
  )
}