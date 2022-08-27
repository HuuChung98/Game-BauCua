import React from 'react';
import { useSelector } from "react-redux";

import ConVat from './ConVat';

const BAN_CHOI = [
    'bau', 'cua', 'tom', 'ca', 'ga', 'nai'
];

export default function BanChoi() {
    const { danhSachCuoc } = useSelector((state) => state.baucua);
    return (
        <div className='row'>
            {danhSachCuoc.map((item) => {
                return (
                    // khai bao key truoc
                    <div key={item.loai} className="col-sm-4">
                        <ConVat data={item} />
                    </div>
                )
            })}
        </div>
    )
}
