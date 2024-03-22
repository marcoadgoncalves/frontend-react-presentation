import { Section } from "../components/Section";

export function Challenge() {
  return (
    <Section>
      <h2>Challenge</h2>
      <p>Launch this React project locally and explore!</p>
      <p data-markdown>
        Click
        [here](https://github.com/marcoadgoncalves/frontend-react-presentation)
        to open the GitHub page
      </p>
      <p>
        Slack{" "}
        <code style={{ fontSize: "30px", backgroundColor: "lightcoral" }}>
          #lunchbox_frontend_react
        </code>{" "}
        for help
      </p>
    </Section>
  );
}
