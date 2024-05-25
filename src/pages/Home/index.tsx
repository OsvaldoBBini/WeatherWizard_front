import { useSelector } from "react-redux";
import Modal from "../../components/Modal";
import { ReactPortal } from "../../components/ReactPortal";
import { RootState } from "../../app/store";
import Card from "../../components/Card";

export default function Home(): JSX.Element {

  const modalStatus = useSelector((state: RootState) => state.user.modalStatus);
  const userId = useSelector((state: RootState) => state.user.userId);

  return (
    <>
      <div className="static flex h-screen items-center justify-center bg-primary-lighter">
        {userId && <Card/>}
      </div>
      <ReactPortal children={<Modal isOpen={modalStatus}/>}/>
    </>
  )
}