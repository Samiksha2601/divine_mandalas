import './App.css'

function App() {
  const buttonClick = () => {
    console.log("Mandala World");
  }
  return (
    <div>
      <button onClick = {buttonClick}
        >Submit</button>
    </div>
  )
}


export default App
