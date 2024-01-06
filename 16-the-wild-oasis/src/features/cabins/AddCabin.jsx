/** @format */

import { useState } from "react";
import Row from "../../ui/Row";
import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Row>
        <Button onClick={() => setIsOpenModal((show) => !show)}>
          Add new cabin
        </Button>
        {isOpenModal && (
          <Modal onClose={() => setIsOpenModal(false)}>
            <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
          </Modal>
        )}
      </Row>
    </div>
  );
}

export default AddCabin;
