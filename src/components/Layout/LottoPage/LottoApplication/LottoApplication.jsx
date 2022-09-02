
import { LottoTitle } from "../../../StyledComponents/Title"
export default function LottoApplication({outputLottoNumbers}){

    return (
        <>
            <div className="topic-container">
                <LottoTitle>Lotto 6 / 49</LottoTitle>
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
