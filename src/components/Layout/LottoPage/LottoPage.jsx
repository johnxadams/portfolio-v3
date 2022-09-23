// hooks
import React, { useState } from 'react';

// utils
import { randomLottoNums } from '../../../utils/lottoPageUtils';

//components
import LottoApplication from './LottoApplication/LottoApplication';

// styled-components
import { LottoBtn } from '../../StyledComponents/Button';

export default function LottoPage() {
  const arrOfEmptyStrings = ['', '', '', '', '', '', ''];

  const [lottoState, setLottoState] = useState(arrOfEmptyStrings);

  const handleRandomLottoNums = () => {
    randomLottoNums({ setLottoState });
  };

  return (
    <>
      <div className="lotto-container">
        <LottoApplication
          outputLottoNumbers={lottoState}
          emptyBoxes={arrOfEmptyStrings}
        />
        <div className="button-container">
          <LottoBtn onClick={() => setLottoState(arrOfEmptyStrings)}>
            Reset
          </LottoBtn>
          <LottoBtn retryBtn onClick={handleRandomLottoNums}>
            Try your Luck
          </LottoBtn>
        </div>
        {/* <LottoLearnMore/> */}
      </div>
    </>
  );
}
