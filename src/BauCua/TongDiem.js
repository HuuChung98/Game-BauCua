import React from 'react';
// Lay data tu redux Store ve thi phai su dung useSelector de lay 
import { useSelector } from "react-redux";

export default function TongDiem() {
    const { tongDiem } = useSelector((state) => state.baucua);
    return (
        <div style={{ border: "3px solid #000" }} className='p-4 bg-warning mt-5'>
            <span className='text-dark'>Tong Diem: </span>
            <span>{tongDiem}</span>
        </div>
    )
}
