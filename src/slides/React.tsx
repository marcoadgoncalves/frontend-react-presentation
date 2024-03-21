import { useState } from "react";
import { Section } from "../components/Section";

export function React() {
  const [clickCount, setClickCount] = useState(0);
  return (
    <Section animated>
      <section>
        <h2>React</h2>
        <p>
          What's React? Why does React exists (necessity)? Why is it so popular?
          Main features
        </p>
      </section>
      <section>
        <h3>JSX (JavaScript XML)</h3>
        <p>
          JSX is a syntax extension for JavaScript recommended by React for
          writing HTML within JavaScript. It looks like HTML but works inside
          JavaScript.
        </p>
      </section>
      <section>
        <h3>Components</h3>
        <p>
          Components are the building blocks of any React application. They let
          you split the UI into independent, reusable pieces that can be handled
          separately.
        </p>
      </section>
      <section>
        <h3>Props</h3>
        <p>
          Props (short for properties) are a way of passing data from parent to
          child components, essentially making components reusable by giving
          them the ability to receive data.
        </p>
      </section>
      <section>
        <h3>State</h3>
        <p>
          State is a set of data that determines the component's behavior and
          how it renders. Unlike props, the state is local to the component and
          can be changed.
        </p>
        <p>Click count {clickCount}</p>
        <button
          type="button"
          onClick={() => setClickCount((value) => value + 1)}
        >
          Click to add
        </button>
      </section>
      <section>
        <h3>Hooks</h3>
        <p>
          Hooks are functions that let you “hook into” React state and lifecycle
          features from function components. They were introduced in React 16.8.
        </p>
      </section>
      <section>
        <h3>Virtual DOM</h3>
        <p>
          The Virtual DOM is a lightweight copy of the real DOM. It is a
          programming concept where an ideal, or "virtual", representation of a
          UI is kept in memory and synced with the "real" DOM by a library such
          as ReactDOM.
        </p>
      </section>
    </Section>
  );
}
