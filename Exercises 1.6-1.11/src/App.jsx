import { useState } from "react";
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

const Statistics = ({ good, bad, neutral, total, average, positive }) => {
  if (total === 0) {
    return <h2>No Feedback Given</h2>;
  }
  return (
    <table>
      <StatisticLine text={"good "} value={good} />
      <StatisticLine text={"neutral"} value={neutral} />
      <StatisticLine text={"bad"} value={bad} />
      <StatisticLine text={"total"} value={total} />
      <StatisticLine text={"average"} value={average} />
      <StatisticLine text={"positive"} value={positive} />
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const average =
    total === 0 ? 0 : ((bad * -1 + good * 1 + neutral * 0) / total).toFixed(1);
  const positive = total === 0 ? 0 : ((+good / +total) * 100).toFixed(1);

  const goodPlus = () => {
    return setGood(good + 1);
  };
  const neutralPlus = () => {
    return setNeutral(neutral + 1);
  };
  const badPlus = () => {
    return setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={goodPlus} text={"Good"} />
      <Button onClick={neutralPlus} text={"Neutral"} />
      <Button onClick={badPlus} text={"Bad"} />
      <h1>Statics</h1>
      <Statistics
        good={good}
        bad={bad}
        total={total}
        neutral={neutral}
        average={average}
        positive={positive + "%"}
      />
    </div>
  );
};

export default App;
