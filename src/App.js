import './App.css';
import JobDetail_Page from './Pages/JobDetail_Page/JobDetail_Page';
import JobView_Page from './Pages/JobView_Page/JobView_Page';
import { Routes,Route } from "react-router-dom";
import JobListing_Page from './Pages/JobListing_Page/JobListing_Page';
import UnderConstruction from './Pages/UnderConstruction';


function App() {
  return (
    <div className="App">
      {/* <JobView_Page/> */}
      <Routes>
          <Route path="/" element={<JobDetail_Page/>}/>
          <Route path="jobView" element={<JobView_Page/>}/>
          <Route path="joblist" element={<JobListing_Page/>}/>
          <Route path="*" element={<UnderConstruction/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
