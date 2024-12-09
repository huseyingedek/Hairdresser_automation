import React from 'react';
import { Card } from '@/Core/index'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const dashboard = () => {
    const areaData = [
        { date: '2024-01', close: 150 },
        { date: '2024-02', close: 200 },
        { date: '2024-03', close: 180 },
        { date: '2024-04', close: 220 },
        { date: '2024-05', close: 240 },
        { date: '2024-06', close: 280 }
    ];

    const pieData = [
        { name: 'Kategori 1', value: 27 },
        { name: 'Kategori 2', value: 25 },
        { name: 'Kategori 3', value: 18 },
        { name: 'Kategori 4', value: 15 },
        { name: 'Kategori 5', value: 10 },
        { name: 'Diğer', value: 5 }
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];
    return (
        <div>
            <div className='flex flex-wrap gap-8 p-10 justify-center'>
                <Card title="Toplam Müşteri" amount="222" img="img/user.png"/>
                <Card title="Hizmetler" amount="2" img="img/product.png"/>
                <Card title="Yapılan Satışlar" amount="77₺" img="img/sale.png"/>
                <Card title="Aylık Gelir" amount="575₺" img="img/money.png"/>
            </div>
            <div className="flex justify-between gap-10 lg:flex-row flex-col items-center">
                <div className="lg:w-1/2 lg:h-full h-72 w-full">
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={areaData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey="close"
                                stroke="#8884d8"
                                fill="#8884d8"
                                fillOpacity={0.3}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="lg:w-1/2 lg:h-full h-72 w-full">
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                                label
                            >
                                {pieData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Legend />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default dashboard;
