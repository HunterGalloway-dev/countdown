import logo from './logo.svg';
import './App.css';
import CountdownTimer from './CountdownTimer';

function App() {
  const ARRIVE_DATE = new Date("2024-01-27T07:10:08Z").getTime();
  // 1/27/2024 5:08PM EST
  //UTC−05:00 
  // 10:08 PM UTC
  const NOW_IN_MIS = new Date().getTime();
  
  const dateTimeAfter = ARRIVE_DATE;
  return (
    <div>
      <h1>Countdown</h1>
      <CountdownTimer targetDate={dateTimeAfter} />
    </div>
  );
}

export default App;
