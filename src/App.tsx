import { useMemo, useState } from 'react';

export function App() {
  const [name, setName] = useState('Lucas');
  const [count, setCount] = useState(0);

  const greeting = useMemo(() => {
    return `Hello, ${name || 'friend'}!`;
  }, [name]);

  return (
    <main className="app-shell" data-testid="app-shell">
      <section className="card" data-testid="welcome-card">
        <h1>Playwright Local Playground</h1>
        <p data-testid="greeting-text">{greeting}</p>

        <label htmlFor="name-input">Name</label>
        <input
          id="name-input"
          data-testid="name-input"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Type a name"
        />

        <div className="counter" data-testid="counter-section">
          <p data-testid="counter-value">Count: {count}</p>
          <button
            type="button"
            data-testid="increment-button"
            onClick={() => setCount((current) => current + 1)}
          >
            Increment
          </button>
        </div>
      </section>
    </main>
  );
}