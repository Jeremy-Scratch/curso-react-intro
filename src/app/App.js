import { AppUi } from './AppUi';
import { TodoProvider } from '../todoContext';

function App() {
 
  return (
      <TodoProvider>
        <AppUi />
      </TodoProvider>
  );
}

export default App;