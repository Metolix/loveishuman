# Contributing

Thanks for considering a contribution to Love Is Human. This is an educational reading room about love, relationships, feelings, and human connection. Contributions that make the writing clearer, the experience more welcoming, or the site easier to use are appreciated.

## Before you start

- For a substantial change, open an issue first so we can agree on the direction.
- For a small fix, such as a typo or a clear accessibility improvement, a pull request is fine on its own.
- Keep changes focused. Explain the problem they solve in plain language.

## Set up the project

You’ll need Node.js and npm. Clone the repository, then run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Check your changes

Run the linter before submitting:

```bash
npm run lint
```

Use Prettier to format the project when needed:

```bash
npm run format
```

If you change a page or interaction, check it in a browser at desktop and mobile widths. Check keyboard navigation and reduced-motion preferences when you change interactive or animated elements.

## Writing and sources

- Write with warmth and clarity. Avoid assuming every reader has the same background, relationship, identity, or experience.
- Treat relationship and mental health topics with care. Keep general education distinct from diagnosis or professional advice.
- Support factual health claims with reliable sources. Add or update the relevant references in the site’s sources content when appropriate.
- Preserve nuance. Avoid presenting one relationship model or personal experience as universal.

## Code and design

- Keep components small enough to understand and reuse existing styles and patterns where they fit.
- Prefer semantic HTML and accessible labels, focus states, and contrast.
- Keep motion purposeful and restrained. Respect `prefers-reduced-motion`.
- Avoid adding dependencies for a small effect that CSS or existing packages can handle.
- Don’t commit generated output, local environment files, or secrets.

## Pull requests

Include a short summary of what changed and why. Mention the pages or interactions affected, the checks you ran, and any follow-up work that would help reviewers. Add screenshots for visible design changes when practical.
