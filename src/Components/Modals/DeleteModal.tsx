import Button from "../Button";
interface DeleteModalProps {
  openDeleteModal: boolean;
  confirmDelete: () => void;
  cancelDelete: () => void;
}
const DeleteModal = ({
  openDeleteModal,
  confirmDelete,
  cancelDelete,
}: DeleteModalProps) => {
  return (
    <>
      {openDeleteModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center w-full h-full">
          <div className="flex-flex-col bg-white w-fit max-w-md p-4 text-center rounded-xl ">
            <div>Are you Sure you want to delete?</div>
            <div className="flex gap-4 w-full justify-center mt-5">
              <Button onClick={confirmDelete}>Delete</Button>
              <Button onClick={cancelDelete}>Cancel</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
