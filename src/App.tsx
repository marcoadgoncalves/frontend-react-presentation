import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes/notes";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import Markdown from "reveal.js/plugin/markdown/markdown";
import "./App.css";

import {
  Browser,
  Challenge,
  FrontEnd,
  FrontEndTools,
  Introduction,
  LunchboxSessions,
  React,
  ReactDemo,
} from "./slides";
import { useCalculateHeight } from "./utils/useCalculateHeight";

function App() {
  const deckDivRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: "slide",
      // other config options
    });

    deckRef.current
      .initialize({
        controls: true,
        hash: true,
        margin: 0.1,
        plugins: [RevealNotes, RevealHighlight, Markdown],
      })
      .then(() => {
        // good place for event handlers and plugin setups
      });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  const vh = useCalculateHeight();

  return (
    <div style={{ height: vh }}>
      <p id="header-logo">LYNXMIND</p>
      <div className="reveal" ref={deckDivRef}>
        <div className="slides">
          <Introduction />
          <LunchboxSessions />
          <FrontEnd />
          <Browser />
          <FrontEndTools />
          <React />
          <ReactDemo />
          <Challenge />
        </div>
      </div>
    </div>
  );
}

export default App;
