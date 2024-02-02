import './App.css';
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import Contents from "./contents/contents";

function App() {
  return (
      <div>
    <Header />
        <div className="verticalalign">
    <Sidebar />
        <Contents />
      </div>
      </div>
  );
}

export default App;
