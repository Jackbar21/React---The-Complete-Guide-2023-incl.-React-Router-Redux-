import Header from "./components/Header/Header";
import Form from "./components/Form/Form/Form";
import { useState } from "react";
import Table from "./components/Table/Table/Table";

function App() {
  const [yearlyData, setYearlyData] = useState([]);

  const reverseDataHandler = () => {
    setYearlyData((prevYearlyData) =>
      prevYearlyData.reduce((acc, element) => [element, ...acc], [])
    );
  };

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const newYearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    let totalInterestGained = 0; // Initialize the running total
    let totalInvestedCapital = currentSavings; // Initialize the running total

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      totalInterestGained += yearlyInterest;
      totalInvestedCapital += yearlyContribution;

      newYearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterestGained,
        totalInvestedCapital,
      });
    }

    // do something with yearlyData ...

    setYearlyData(newYearlyData);
    // setYearlyData(newYearlyData);
  };

  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {/* <center onClick={reverseDataHandler}>Reverse</center> */}
      <Table data={yearlyData} reverseHandler={reverseDataHandler} />
    </div>
  );
}

export default App;
