import React from 'react';
import { Button, Form, Input, Modal } from 'antd';

interface AddServicesProps {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddServices: React.FC<AddServicesProps> = ({ isModalOpen, setIsModalOpen }) => {
    const onFinish = (values: any) => {
        console.log('Values:', values);
    };

    return (
        <>
            <Modal
                title="Hizmet Ekle"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={false}
            >

                <Form
                    layout='vertical'
                    onFinish={onFinish}
                >
                    <Form.Item label="Hizmet Adı" name="serviceName" rules={[{ required: true, message: 'Hizmet adı gereklidir!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Hizmet Fiyatı" name="servicePrice" rules={[{ required: true, message: 'Hizmet adı gereklidir!' }]}>
                        <Input />
                    </Form.Item>
                    <div className="text-end">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="blue-button"
                        >
                            Hizmet Ekle
                        </Button>
                    </div>
                </Form>
            </Modal>
        </>
    )
}

export default AddServices