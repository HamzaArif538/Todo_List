
import './App.css';
import Header from "./My_Components/Header";
import Todos from "./My_Components/Todos";
import Footer from "./My_Components/Footer";

function App() {
const onDelete = (todo) => {
  console.log("Todo has been deleted!", todo);
}


  let todos= [
    {
      sno:1,
      title: "Go to the market",
      desc: "You need to go to the Market to get this job done"
    },
    
    {
      sno:2,
      title: "Go to the mall",
      desc: "You need to go to the Mall to get this job done"
    },
    
    {
      sno:3,
      title: "Go to the university",
      desc: "You need to go to the University to get this job done"
    }
  ]


  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer/>
    </>
  );
}

export default App;
