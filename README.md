# Dev Stack

### Explore technologies. Build your development stack.

Dev Stack is a React assignment project for exploring development technologies and choosing a custom stack. The planned experience brings technology cards and a selection panel together so users can review tools, add their choices, and manage everything in one place.

> **Status: In development.** The current project contains a React + TypeScript starter with Vite, Tailwind CSS, and DaisyUI configured. The features below describe the intended assignment implementation.

**Live site:** Coming soon  
**Repository:** Add your GitHub repository link here

## Three Core Features — Planned

1. **Explore a technology catalog** — Browse 10–15 technologies loaded from a separate JSON file. Each card will display an icon, name, description, category, difficulty, rating, and badge.
2. **Build and manage your stack** — Add technologies to a “Your Stack” panel, track the selected count, prevent duplicate selections, remove individual items, or clear the entire stack. Selected cards will show a disabled “✓ Added to Stack” button.
3. **Use the builder across devices** — Browse a responsive card grid with one column on mobile, two on tablets, and three on desktop, supported by a mobile menu, loading feedback, and toast notifications.

## Technology Stack

| Technology | Role | Current status |
| --- | --- | --- |
| React 19 | Component-based interface | Installed |
| TypeScript 6 | Typed application code | Configured |
| Vite 8 | Development server and production build | Configured |
| Tailwind CSS 4 | Utility-based styling | Configured through the Vite plugin |
| DaisyUI 5 | UI component styles | Installed and enabled in CSS |
| ESLint 10 | Code linting | Configured |
| React-Toastify | Notifications for stack actions | Planned; not yet installed |
| JSON | Local technology catalog | Planned; data file not yet created |

## Assignment Scope

- Sticky navigation with branding, Home, Technologies, Projects, About, and Contact links, plus Sign In and Sign Up buttons.
- Mobile navigation with a hamburger icon, centered logo, and account buttons.
- Hero section with a two-tone heading, description, illustration, and Explore Technologies / Learn More buttons.
- A stack sidebar with an empty state and selected items showing their icon, name, category, and remove button.
- React-Toastify feedback for additions, duplicate attempts, individual removals, and clearing the stack.
- A loading indicator while fetching the local JSON catalog.
- One centrally defined orange-to-pink-to-violet gradient shared by the brand, heading highlight, and primary buttons.
- Footer with branding, social links, Product / Company / Legal groups, and copyright information.

Sign In and Sign Up are part of the required interface; authentication is not specified in the assignment. Search, filtering, and saved selections are also outside the stated requirements.

## Run Locally

Use Node.js 22.13 or a later 22.x release, or Node.js 24, with npm. These versions satisfy the Node engine ranges in the inspected Vite and ESLint packages.

1. Clone your repository, replacing the placeholders:

   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   cd YOUR_REPOSITORY
   ```

2. Open the application directory containing `package.json`. In the supplied archive, this is `Assignment-05/Dev Stack`.

3. Install dependencies and start the development server:

   ```bash
   npm ci
   npm run dev
   ```

4. Open the local address printed in the terminal.

> The uploaded starter's `App.tsx` does not currently return its JSX. It needs a valid component return before it can render the application successfully. The commands above are taken from the project configuration; a successful build has not yet been verified.

### Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Run the TypeScript build check and create a production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview a completed production build locally |

## Current Project Structure

Selected files from the application folder in the uploaded archive:

```text
Dev Stack/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── package-lock.json
├── eslint.config.js
├── tsconfig.json
└── vite.config.ts
```

The archive also contains a separate `B14-A05-DevStack` reference folder with assignment instructions, design files, brand assets, and UI images. It is not the React application folder.

## Deployment

After implementing the application and resolving build errors:

1. Run `npm run lint` and `npm run build`.
2. Connect the application repository to your chosen static hosting provider.
3. Set the project root to the directory containing `package.json`, the build command to `npm run build`, and the output directory to `dist`.
4. Add the published URL to the Live site field above.

## Assignment Reference

Based on Programming Hero's [B14-A05-DevStack assignment](https://github.com/ProgrammingHero1/B14-A05-DevStack). The assignment provides the requirements and visual references; this repository is intended to contain the React implementation.

Before submission, update this README to reflect completed features, add the repository and live-site links, and confirm at least eight meaningful Git commits. Review the answers below in your own words and update the project examples to match your implementation.

## React Questions and Answers

*The project examples below describe the planned implementation because the uploaded starter does not yet contain this functionality.*

### 1. What is JSX, and why is it used in React?

JSX lets me describe a user interface using HTML-like markup inside JavaScript. It makes component layouts easier to read and lets me include expressions and dynamic values. In this TypeScript project, JSX is written in `.tsx` files.

### 2. What is the difference between props and state?

Props are values a component receives from its parent. State is data a component manages that can change over time. A technology card will receive technology details through props, while the selected stack will be managed as state.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores a value between renders and provides a function to update it. I plan to use it for the loaded technologies, selected stack, and loading status. These uses are not implemented in the current starter.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after rendering to synchronize a component with something outside React, such as a data request. I plan to use an effect to fetch the JSON catalog when the component mounts, update the technology state, and finish the loading state. This keeps fetching out of the component's render logic.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A key helps React identify which list items were added, removed, or updated. I plan to use each technology's stable `id` as its key. Keys must be unique among siblings in that list.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering displays different content depending on a condition. The planned stack panel will show an empty message when nothing is selected and the selected items otherwise. For example, its empty message could be rendered like this:

```tsx
{selectedStack.length === 0 && (
  <p>Your stack is empty. Add a technology to get started.</p>
)}
```

This is an illustrative example, not code already present in the starter.

### 7. How do you pass data from a parent to a child, and how does a child send something back?

A parent passes data and callback functions through props. A child calls a callback to notify the parent about an action. For this project, the parent will pass a technology and an `onAdd` callback to a card; clicking Add to Stack will call `onAdd(technology)` so the parent can update the selected stack.
