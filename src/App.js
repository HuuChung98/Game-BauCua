import BanChoi from "./BauCua/BanChoi";
import TongDiem from "./BauCua/TongDiem";
import XucXac from "./BauCua/XucXac";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ minHeight: '100vh', color: '#fff'}} className="bg-dark">
      <h1 className="text-center">Game Bau Cua</h1>
      <div className="d-flex justify-content-center">
        <TongDiem />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <BanChoi />
          </div>
          <div className="col-sm-3">
            <XucXac />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
