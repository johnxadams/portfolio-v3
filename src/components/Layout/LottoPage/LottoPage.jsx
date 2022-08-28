// hooks
import React, { useState } from "react";

//components
import LottoApplication from "./LottoApplication/LottoApplication";

// import LottoLearnMore from "./LottoLearnMore/LottoLearnMore";

// styled-components
import { LottoBtn } from "../../StyledComponents/Button";


export default function LottoPage() {
  const arrOfEmptyStrings = ["", "", "", "", "", "", ""];

  const [lottoState, setLottoState] = useState(arrOfEmptyStrings);

  const handleLotto = () => {
    let newArr = [];
    while (newArr.length < 6) {
      const randomNumber = Math.floor(Math.random() * 49 + 1);
      if (!newArr.includes(randomNumber)) {
        newArr.push(randomNumber);
      }
    }

    const superRandomNumber = Math.floor(Math.random() * (10 + 1));

    newArr.push(superRandomNumber);

    setLottoState([...newArr]);
  };

  const handleReset = () => {
    setLottoState(arrOfEmptyStrings);
  };

  return (
    <>
    <div className="lotto-container">
      <LottoApplication
        outputLottoNumbers={lottoState}
        emptyBoxes={arrOfEmptyStrings}
      />
      <div className="button-container">
        <LottoBtn onClick={handleReset}>Reset</LottoBtn>
        <LottoBtn retryBtn onClick={handleLotto}>Try your Luck</LottoBtn>
      </div>
      {/* <LottoLearnMore/> */}
      </div>
    </>
  );
}
