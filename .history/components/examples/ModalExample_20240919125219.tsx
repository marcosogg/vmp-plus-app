import React from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';

const ModalExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Modal Example</h2>
      <Modal
        trigger={<Button>Open Modal</Button>}
        title="Example Modal"
        description="This is an example of how to use the Modal component."
      >
        <div className="p-4">
          <p>This is the content of the modal. You can put any JSX here.</p>
          <Button className="mt-4">Close</Button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalExample;