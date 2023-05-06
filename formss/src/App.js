import { Footer } from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="form">
      <div className="gridContainer">
        <div className="item1">Header</div>
        <div className="item2">Left</div>
        <div className="item3">Main</div>
        <div className="item4">Right</div>
        <div className="item5">
          <Footer />
        </div>
      </div>
      {/* https://ilovecoding.org/courses/htmlcss/lessons/table-all-about-creating-simple-to-complex-html-tables */}
    </div>
  );
}

export default App;
