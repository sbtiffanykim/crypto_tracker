import { Outlet, useParams } from 'react-router-dom';

function App() {
  return (
    <>
      <aside></aside>
      <Outlet />
    </>
  );
}

export default App;
