import logo from "./logo.svg";
import { Button } from "@shared/ui-kit";

function App() {
  return (
    <div className="App bg-gray-800 h-screen w-full text-white">
      <header className="App-header w-1/2 mx-auto">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-center">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="text-center">
          <Button label="Test button" onClick={() => {}} />
        </div>
      </header>
    </div>
  );
}

export default App;
