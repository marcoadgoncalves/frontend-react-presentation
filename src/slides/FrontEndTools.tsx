import { GenerateGradient } from "../utils/generateGradient";

export function FrontEndTools() {
  return (
    <section data-background-gradient={GenerateGradient()}>
      <section>
        <h2>The FE engineer tools</h2>
        <p>
          Package Manager, IDE, TypeScript, pipelines, bundlers, repositories,
          etc! 😰
        </p>
      </section>
      <section>
        <h3>Integrated Development Environment</h3>
        <p>Visual Studio Code, WebStorm, ...</p>
      </section>
      <section>
        <h3>Package Manager</h3>
        <p>Npm, Yarn, Pnpm, Bun, ...</p>
      </section>
      <section>
        <h3>Bundlers</h3>
        <p>Webpack, SWC, Vite, ...</p>
      </section>
      <section>
        <h3>Code repositories</h3>
        <p>GitHub, BitBucket, GitLab, ...</p>
      </section>
      <section>
        <h3>TypeScript</h3>
        <p>Doing what JavaScript can't do</p>
      </section>
      <section>
        <h3>Pipelines</h3>
        <p>Allow continuous integration and continuous delivery/deployment</p>
        <p>Jenkins, TeamCity, Concourse, ... </p>
      </section>
    </section>
  );
}
