import { ThemeProvider } from './components/ThemeProvider';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground p-8">
        <h1 className="text-4xl font-bold text-center">EduX Platform</h1>
        <p className="text-center mt-4 text-muted-foreground">
          Testing the app - if you can see this, the basic app is working
        </p>
        <div className="mt-8 p-4 border rounded-lg bg-card">
          <p>Theme system is working if this card has proper styling</p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;