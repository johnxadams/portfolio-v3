import React, {useState} from 'react'


export default function LottoApplication(props){

    return (
        <>
            <div className="topic-container">
                <h1>Lotto 6 / 49</h1>
                <span>good luck</span>
            </div>
            <div className="lotto-container">
                {props.outputLottoNumbers.map((num, i) => {
                    return (<div className="lottoDiv" key={i}>{num}</div>)
                })}
            </div>
        </>
    )
}
