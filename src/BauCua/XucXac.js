import React from 'react';
import { useSelector, useDispatch } from "react-redux";

export default function XucXac() {
    const { xucXac } = useSelector((state) =>  state.baucua);
    
    const dispatch = useDispatch();
    const playGame = () => {
        dispatch({ type: "PLAY_GAME" })
    };
  return (
    <div className='d-flex flex-column justify-content-center align-items-center my-3'>
        {xucXac.map((item) => {
            return (
                <img src={`/img/${item}.png`} 
                    alt={item}
                    width="100px"
                    height="100px" 
                    className='my-3'/>
            )
        })}

        <button className='btn btn-success mt-5 ' onClick={playGame}>Xoc</button>

    </div>
  )
}
