import React from 'react';
import './App.css';
import BarcodeScannerComponent from "react-webcam-barcode-scanner"

function App() {


  const [ data, setData ] = React.useState('Not Found');
  const [ lastScanned, setLastScanned ] = React.useState('nothing scanned yet')
  const [ open, toggleOpen ] = React.useState(false);

  let scanner; 

  if(open) {
    scanner = 
    <BarcodeScannerComponent 
    width={500}
    height={500}
    onUpdate={(err, result)=> {
      if(result) {
        setData(result.text);
        setLastScanned(result.text)
      } else {
        setData('Not Found');
      }
    }}
  />
  } else {
    scanner = <div></div>
  }


  return (
    <div className="App">
      {scanner}
      <p>{data}</p>
      <p>{lastScanned}</p>
      <button onClick={() => toggleOpen(!open)}>toggle scanner</button>
    </div>
  );
}

export default App;
