import { MainHeader } from "./components/header/MainHeader";
import { Home } from "./pages/Home";
function App() {
  return (
    <div className="flex flex-col p-4 w-full">
      <MainHeader />
      <Home />
    </div>
  );
}

export default App;
