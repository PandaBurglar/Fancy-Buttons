import './App.css';
import AngryButton from './components/AngryButton'
import CounterButton from './components/CounterButton'
import TextRepeaterButton from './components/TextRepeaterButton'
import LightSwitchButton from './components/LightSwitchButton'

function App() {
  return (
    <div className="App">
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton />
        <TextRepeaterButton />
      </section>

    </div>
  );
}

export default App;
