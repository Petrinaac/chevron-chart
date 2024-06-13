import { useState } from 'react';
import './App.css';
import CheckboxGroup from './components/CheckboxGroup';
import ChevronChart from './components/ChevronChart';

function App() {
  const [checkboxes, setCheckboxes] = useState([true, false]);

  const handleCheckboxChange = (index) => {
    let newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];

    if (!newCheckboxes[index] && newCheckboxes.length > 2) {
      newCheckboxes.splice(index, 1);
    }

    if (newCheckboxes[newCheckboxes.length - 1]) {
      newCheckboxes.push(false);
    }

    if (!newCheckboxes.some(checkbox => checkbox)) {
      newCheckboxes[0] = true;
    }

    setCheckboxes(newCheckboxes);
  };

  return (
    <div className="App">
      <form>
        <CheckboxGroup checkboxes={checkboxes} handleChange={handleCheckboxChange} />
      </form>
      <ChevronChart checkboxes={checkboxes} />
    </div>
  );
}

export default App;