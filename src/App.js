import "./App.css";
import LoginComponent from "./components/LoginComponent";
import ProfileComponent from "./components/ProfileComponent";
import ThemeComponent from "./components/ThemeComponent";

function App() {
  return (
    <div>
      <LoginComponent />
      <hr />
      <ProfileComponent />
      <hr />
      <ThemeComponent />
    </div>
  );
}

export default App;
