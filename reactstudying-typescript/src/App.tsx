import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState<string>('');
  const [select, setSelect] = useState<number>(0);

  const handleSetText = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setText(target.value);
  }

  const renderTextArea = () => {
    if (text.length === 0) {
      return (<h1> 입력 값이 없습니다. </h1>)
    }
    if (text.length < 10) {
      return (<h1> {`${text} : ${select}`} </h1>)
    }
    return (<h1> 10 초과 </h1>)
  }

  const handleSelectChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    const { target } = event;
    // console.log(typeof target.value);
    setSelect(parseInt(target.value));
  }

  return (
    <div className="App">
      <input onChange={handleSetText}/>
      <br/>
      <select onChange={handleSelectChange} defaultValue={''}>
        <option value={''}></option>
        <option value={1}>1</option>
        <option value={2}>2</option>
      </select>
      <br/>
      {renderTextArea()}
    </div>
  );
}

export default App;
