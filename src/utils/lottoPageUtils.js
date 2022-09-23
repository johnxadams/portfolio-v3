export const randomLottoNums = ({setLottoState}) => {
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