import './App.css'

function App() {
  const buttonClick = () => {
    console.log("Mandala World");
  }
  const buttonRefresh = () => {
    console.log("I'm here!");
  }
  return (
    <div>
      <button onClick = {buttonClick}
        >Submit</button>
        <br/>
      <button onClick = {buttonRefresh}>Refresh</button>
    </div>
  )
}


export default App
