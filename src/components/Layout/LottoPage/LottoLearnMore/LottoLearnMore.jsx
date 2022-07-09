import React, { useState } from "react";

export default function LottoLearnMore() {
  const [state, setState] = useState();

  const handleLearnMore = (e) => {  
    e.target.nextSibling.classList.toggle("toggle-info")
};

  return (
    <>
      <div className="lotto-learn-more-container">
        <div onClick={handleLearnMore} className="learn-more-circle">Learn more</div>
        <div className="lotto-info toggle-info">Duis aute irure dolor in reprehenderit in voluptate velit esse  cupidatat</div>
      </div>
    </>
  );
}
