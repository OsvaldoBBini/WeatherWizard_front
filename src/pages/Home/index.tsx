import Modal from "../../components/Modal";
import { ReactPortal } from "../../components/ReactPortal";

export default function Home(): JSX.Element {
  return (
    <>
      <div className="static">
        <h1>Home</h1>
      </div>
      <ReactPortal children={<Modal/>}/>
    </>
  )
}