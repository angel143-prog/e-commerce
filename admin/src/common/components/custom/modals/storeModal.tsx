"use client";

import Modal from "@/components/custom/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

const storeModal = () => {
  const storeModals = useStoreModal();
  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={storeModals.isOpen}
      onClose={storeModals.onClose}
    >
      Future Create Store Form
    </Modal>
  );
};

export default storeModal;
