# Contributing to QUENCH 🍔

Thank you for your interest in contributing to **QUENCH**! We welcome all contributions, whether it's fixing a bug, improving the UI, adding new features, or helping with documentation. This guide will help you get started quickly.

---

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [How to Contribute](#how-to-contribute)
4. [Submitting Changes](#submitting-changes)
5. [Good First Issues](#good-first-issues)
6. [Coding Guidelines](#coding-guidelines)

---

## Code of Conduct

By contributing to QUENCH, you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md) (if available). Please be respectful and kind in all interactions.

---

## Getting Started

Follow these steps to set up the project locally:

1. **Fork the repository** to your GitHub account.
2. **Clone your fork** locally:

```bash
git clone https://github.com/your-username/QUENCH.git
cd QUENCH
```

3. **Install dependencies:**

```bash
npm install
# or if you use yarn
yarn install
```

4. **Start the development server:**

```bash
npx expo start
```

The app should now be running in Expo Go on your device or simulator.

> **Optional:** If your project uses sample data (JSON files, images, etc.), make sure to copy or set up the data so the app displays content correctly.

---

## How to Contribute

### Reporting Bugs

- Check the [issues](https://github.com/your-username/QUENCH/issues) to see if the bug is already reported.

- If not, create a new issue with:
  - **Title:** Short description of the bug
  - **Description:** Steps to reproduce
  - **Expected vs Actual behavior**
  - **Screenshots** if helpful

### Fixing Bugs or Adding Features

1. Pick an issue labeled `good first issue` or `help wanted`.

2. Create a new branch from `main`:

```bash
git checkout -b your-branch-name
```

3. Make your changes and commit small, descriptive messages.

---

## Submitting Changes

1. Push your branch to your fork:

```bash
git push origin your-branch-name
```

2. Open a Pull Request (PR) against the `main` branch of QUENCH.

3. Include in the PR description:
   - What you changed and why
   - Screenshots or GIFs (for UI changes)
   - Link to the issue you are resolving (if any)

4. Respond politely to reviewer feedback and make requested changes.

---

## Good First Issues

Look for issues labeled `good first issue` or `help wanted`. These are small, easy-to-start tasks designed for new contributors. If you see a bug or feature you want to work on, leave a comment on the issue saying you want to work on it before starting.

> **Tip:** Issues should be scoped so a contributor can complete them in a few hours to a day.

---

## Coding Guidelines

- Use **Tailwind CSS** for styling consistency.
- Prefer **Redux Toolkit** for state updates.
- Use **React Navigation** for navigation patterns.
- Keep commits small and descriptive (e.g., `fix(button): correct padding on profile screen`).
- Test your changes on both iOS and Android whenever possible.

---

Thank you for helping make QUENCH better! 🎉
