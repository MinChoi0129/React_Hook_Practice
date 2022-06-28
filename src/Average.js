import { useMemo, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const onChange = (e) => setNumber(e.target.value);
  const onInsert = (e) => {
    if (number) {
      if (number === "0") {
        const nextList = list.concat(0);
        setList(nextList);
      } else if (parseInt(number)) {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
      }
      setNumber("");
    }
  };

  const avg = useMemo(() => getAverage(list), [list])
  return (
    <>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>추가</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b>
        {avg}
      </div>
    </>
  );
};

export default Average;
