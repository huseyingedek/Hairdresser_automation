import React from 'react'
import { Table } from 'antd'

const services = () => {

    const dataSource = [
        {
            key: '1',
            name: 'Saç Kesim',
            price: 300,
        },
        {
            key: '2',
            name: 'Fön Çekim',
            price: 100,
        },
    ];

    const columns = [
        {
            title: 'Hizmet Adı',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Fiyat',
            dataIndex: 'price',
            key: 'price',
        },
    ];

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}

export default services