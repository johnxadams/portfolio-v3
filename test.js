const testing = {
    HPPP: "hp",
    ATTTACK: "attack",
    SPED: "speed",
    SpecialAttack: "specialAttack",
  }

  let [first, second] = Object.keys(testing)

  console.log(first,second);

  let values = Object.keys(testing)
  console.log("values: ", values);

  {values.ATTTACK && <p>{alues.ATTACK}</p>}