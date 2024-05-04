import { useSelector } from "react-redux";
import Modal from "../../components/Modal";
import { ReactPortal } from "../../components/ReactPortal";
import { RootState } from "../../app/store";

export default function Home(): JSX.Element {

  const modalStatus = useSelector((state: RootState) => state.user.modalStatus);
  const userId = useSelector((state: RootState) => state.user.userId);

  console.log(userId);

  return (
    <>
      <div className="static">
        <h1>Home</h1>
      </div>
      <ReactPortal children={<Modal isOpen={modalStatus}/>}/>
    </>
  )
}