import React from 'react';
import { useSelector } from "react-redux";

const BAN_CHOI = [
    'bau', 'cua', 'tom', 'ca', 'ga', 'nai'
];

export default function BanChoi() {
    const { danhSachCuoc } = useSelector((state) => state.baucua);
    return (
        <div className='row'>
            {danhSachCuoc.map((item) => {
                return (
                    <div className="col-sm-4">
                        <div className="card bg-warning my-3">
                            <img src={`/img/${item.loai}.png`} alt={item} />
                            <div className="card-body">
                                <div className='card-title text-center'>
                                    <span className='mr-2'>Cuoc</span>
                                    <button className='btn btn-success'>-</button>
                                    <span className='mx-3'>{item.diemCuoc}</span>
                                    <button className='btn btn-success'>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
