import React, {useState} from 'react'
import LinkToGifPage from '../LinkToGifPage/LinkToGifPage';

//components
import LottoApplication from './LottoApplication/LottoApplication'
import LottoLearnMore from './LottoLearnMore/LottoLearnMore';

export default function LottoPage() {

    const arrOfEmptyStrings = ["","","","","","",""];
    
    const [lottoState, setLottoState] = useState(arrOfEmptyStrings);
  
    const handleLotto = () => {
      let newArr = []
      while (newArr.length < 6) {
        const randomNumber = Math.floor(Math.random() * 49 + 1);
        if (!newArr.includes(randomNumber)){
          newArr.push(randomNumber);
        }
      }
  
      const superRandomNumber = Math.floor(Math.random() * (10 + 1));
  
      newArr.push(superRandomNumber);
  
      setLottoState([...newArr])
      
    }
  
    const handleReset = () => {
      setLottoState(arrOfEmptyStrings)
    }
  
    return (
      <>     
          <LottoApplication outputLottoNumbers={lottoState} emptyBoxes={arrOfEmptyStrings}/>
          <div className="button-container">
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleLotto}>Try your Luck</button>
          </div>  
          <LottoLearnMore/>
          <LinkToGifPage/>
      </>
  
    );
  }
