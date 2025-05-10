import "./App.css";
import PetPostsPage from "./Components/PetPost/PetPostPage";
import RehomeStartForm from "./Components/RehomeStartFormPage/RehomeStartForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/pet-task" element={<PetPostsPage />} />
          <Route path="/Addpost" element={<RehomeStartForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
