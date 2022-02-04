import Header from "./components/Header";
import Main from "./components/Main";
import { DragDropContext } from "react-beautiful-dnd";

export default function App() {
  return (
    <div className="bg-bgImage min-h-screen bg-fixed bg-center bg-cover">
      <Header />
      <Main />
    </div>
  );
}
