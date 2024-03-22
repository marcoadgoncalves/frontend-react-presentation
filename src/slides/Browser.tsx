import { Section } from "../components/Section";

const HTML_CODE_EXAMPLE = `<html>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
    <button onclick="myFunction">Try it</button>
  </body>
</html>`;

const CSS_CODE_EXAMPLE = `h1 {
    color: darkred;
    text-align: center;
  }
p {
    text-align: center;
  }`;

const JS_CODE_EXAMPLE = `function myFunction() {
    alert("Button clicked!")}
  }`;

export function Browser() {
  return (
    <Section>
      <section>
        <h2>How does a browser works?</h2>
        <p className="fragment fade-in-then-semi-out">
          There are 3 files to keep in mind
        </p>
        <pre className="fragment fade-in-then-semi-out">
          <code data-line-numbers>{HTML_CODE_EXAMPLE}</code>
        </pre>
        <pre className="fragment fade-in-then-semi-out">
          <code data-line-numbers>{CSS_CODE_EXAMPLE}</code>
        </pre>
        <pre className="fragment fade-in-then-semi-out">
          <code data-line-numbers>{JS_CODE_EXAMPLE}</code>
        </pre>
      </section>
      <section>
        <h1 style={{ color: "darkred" }}>My First Heading</h1>
        <p>My first paragraph</p>
        <button onClick={() => alert("Button clicked!")}>Try it</button>
      </section>
      <section>
        <h3>URL entry</h3>
        <p>https://www.lynxmind.com/</p>
      </section>
      <section>
        <h3>DNS lookup</h3>
        <p>Search name and find public IP</p>
      </section>
      <section>
        <h3>Server Request</h3>
        <p>Browser sends an HTTP/HTTPS request to the web server</p>
      </section>
      <section>
        <h3>Response and rendering</h3>
        <p className="fragment fade-in-then-semi-out">
          Browser gets a set of HTML, CSS, JavaScript, Images as well as other
          resources
        </p>
        <p className="fragment fade-in-then-semi-out">
          Browser calculates the layout of all elements from HTML and CSS
        </p>
        <p className="fragment fade-in-then-semi-out">
          JavaScript engine parses and executes JavaScript code
        </p>
      </section>
      <section>
        <h3>Event handling</h3>
        <p>The browser listens and JavaScript acts</p>
      </section>
      <section>
        <h3>Networking</h3>
        <p>User navigation and interaction can trigger network requests</p>
      </section>
      <section>
        <h3>Caching</h3>
        <p>Browser stores resource caching for speed</p>
      </section>
    </Section>
  );
}
