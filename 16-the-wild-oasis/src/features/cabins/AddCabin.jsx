/** @format */

import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens='cabin-form'>
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name='cabin-form'>
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Row>
//         <Button onClick={() => setIsOpenModal((show) => !show)}>
//           Add new cabin
//         </Button>
//         {isOpenModal && (
//           <Modal onClose={() => setIsOpenModal(false)}>
//             <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//           </Modal>
//         )}
//       </Row>
//     </div>
//   );
// }

export default AddCabin;
