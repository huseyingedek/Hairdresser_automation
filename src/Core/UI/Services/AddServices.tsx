import React from 'react';
import { Button, Modal } from 'antd';

interface AddServicesProps {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddServices: React.FC<AddServicesProps> = ({ isModalOpen, setIsModalOpen }) => {

    return (
        <>
            <Modal
                title="Hizmet Ekle"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={false}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}

export default AddServices