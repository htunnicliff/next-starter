# Repo Name

## Getting Started

### Prerequisites

Please familiarize yourself with the documentation for the frameworks, tools, and libraries used in this repository:

- [Next.js](https://nextjs.org)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [ESLint](https://eslint.org)
- [Jest](https://jestjs.io)
- [Testing Library](https://testing-library.com)
- [Storybook](https://storybook.js.org)
- [Tailwind CSS](https://tailwindcss.com)
- {{add links to relevant libraries}}

## Deployment Environments

| Environment  | URL                              | Branch       | Deployment Method    |
| ------------ | -------------------------------- | ------------ | -------------------- |
| Local        | [`http://localhost:3000`][local] | –            | –                    |
| Development  | `https://{{development_url}}`    | `main`       | Automatic            |
| Production   | `https://{{production_url}}`     | `main`       | Manual               |
| {{add more}} | `{{other}}`                      | `{{branch}}` | {{Automatic/Manual}} |

[local]: http://localhost:3000 "Local development link"

## Environment Variables

Please review the Next.js Environment Variables docs.

| Variable Name             | Purpose                                | Local Source[^1]   | Deployed Source[^2] |
| ------------------------- | -------------------------------------- | ------------------ | ------------------- |
| `NEXT_TELEMETRY_DISABLED` | Prevent Next.js from sending telemetry | `.env.development` | `.env.production`   |

[^1]: _Local Source_ is where a variable is defined when working with the project locally
[^2]: _Deployed Source_ is where a variable is defined when the project is deployed to a non-local environment (e.g. development, staging, production).
