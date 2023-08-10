
import AddUser from "./components/addUser/AddUser";
import UserView from "./components/userView/UserView";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  // const [usersList, setUsersList] = useState([]);
  const { usersList } = useSelector((state) => state.users);

  // const updateUsersList = (newUser) => {
  //   // setUsersList([...usersList, newUser]);
  // };


  const renderUsers = usersList.map((el, index) => (
    <UserView
      key={index}
      name={el.name}
      lastName={el.lastName}
      reactions={el.reactions}
    />
  ));
  console.log("users list", usersList);
  return (
    <div className="App">
      <header>
        <h5>Users App</h5>
      </header>
      <AddUser />
      {renderUsers}
    </div>
  );
}

export default App;
