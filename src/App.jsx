import NewProject from "./component/NewProject";
import ProjectSidebar from "./component/ProjectSidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      <NewProject />
    </main>
  );
}

export default App;
