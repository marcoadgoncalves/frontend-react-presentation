import { Section } from "../components/Section";

export function FrontEndTools() {
  return (
    <Section>
      <section>
        <h2>The FE engineer tools</h2>
        <p>
          Package Manager, IDE, TypeScript, pipelines, bundlers, repositories,
          etc! 😰
        </p>
      </section>
      <section>
        <h2>Integrated Development Environment</h2>
        <p>Visual Studio Code, WebStorm, ...</p>
      </section>
      <section>
        <h2>Package Manager</h2>
        <p>Npm, Yarn, Pnpm, Bun, ...</p>
      </section>
      <section>
        <h2>Bundlers</h2>
        <p>Webpack, SWC, Vite, ...</p>
      </section>
      <section>
        <h2>Code repositories</h2>
        <p>GitHub, BitBucket, GitLab, ...</p>
      </section>
      <section>
        <h2>Pipelines</h2>
        <p>Allow continuous integration and continuous delivery/deployment</p>
        <p>Jenkins, TeamCity, Concourse, ... </p>
      </section>
      <section>
        <h2>TypeScript</h2>
        <p>Doing what JavaScript can't do</p>
      </section>
    </Section>
  );
}
