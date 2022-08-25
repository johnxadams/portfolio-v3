


export default function LottoApplication({outputLottoNumbers}){

    return (
        <>
            <div className="topic-container">
                <h1>Lotto 6 / 49</h1>
                <span>good luck</span>
            </div>
            <div className="lotto-numbers-container">
                {outputLottoNumbers.map((num, i) => {
                    return (<div className="lottoDiv" key={i}>{num}</div>)
                })}
            </div>
        </>
    )
}
