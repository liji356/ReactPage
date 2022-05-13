import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">Name</label>
                            <input placeholder="Enter name" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">Roll NO</label>
                            <input placeholder="Enter roll no" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="label-control">Admission No</label>
                            <input placeholder="Enter admission no" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">Mobile No</label>
                            <input placeholder="Enter number" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-612 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="lable-label">College</label>
                            <input placeholder=" Enter College" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">User Name</label>
                            <input placeholder="Enter Username" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="label-control">Password</label>
                            <input placeholder="Enter Password" name="" id="" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-info">REGISTER</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
   </div>
  );
}

export default App;
