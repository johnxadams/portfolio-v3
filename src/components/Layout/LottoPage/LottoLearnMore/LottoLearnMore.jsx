import React, { useState } from "react";

export default function LottoLearnMore() {
  const [state, setState] = useState();

  const handleLearnMore = (e) => {  
    e.target.nextSibling.classList.toggle("toggle-info")
};

  return (
    <>
      <div className="lotto-learn-more-container">
        <div onClick={handleLearnMore} className="learn-more-circle"></div>
        <div className="lotto-info toggle-info">LottoLearnMore</div>
      </div>
    </>
  );
}
