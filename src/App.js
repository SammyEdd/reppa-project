import './App.css';
import { Blueprint } from './components/Blueprint/Blueprint';
import { useFlags } from './hooks/useFlags';

export const App = () => {
  const [flags] = useFlags();
  console.log(flags)
  return (
    <div className="App">
      <Blueprint flags={flags} />
    </div>
  );
}