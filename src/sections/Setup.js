// src/sections/Setup.js
import React from 'react';
import './Setup.css';

const setup = {
  vscode: {
    theme: 'Dracula',
    extensions: ['Prettier', 'ESLint', 'Docker', 'Material Icon Theme'],
  },
  terminal: {
    shell: 'bash',
    colorScheme: 'Monokai',
    tool: 'Windows Terminal',
  },
  font: {
    name: 'Fira Code',
    feature: 'Supports font ligatures for cleaner code',
  },
};

const Setup = () => {
  return (
    <section className="setup-section">
      <h2>Developer Setup</h2>

      <div className="setup-block">
        <h3>VSCode</h3>
        <p>
          <strong>Theme:</strong> {setup.vscode.theme}
        </p>
        <p>
          <strong>Extensions:</strong>
        </p>
        <ul>
          {setup.vscode.extensions.map((ext, i) => (
            <li key={i}>{ext}</li>
          ))}
        </ul>
      </div>

      <div className="setup-block">
        <h3>Terminal</h3>
        <p>
          <strong>Shell:</strong> {setup.terminal.shell}
        </p>
        <p>
          <strong>Color Scheme:</strong> {setup.terminal.colorScheme}
        </p>
        <p>
          <strong>Tool:</strong> {setup.terminal.tool}
        </p>
      </div>

      <div className="setup-block">
        <h3>Editor Font</h3>
        <p>
          <strong>Name:</strong> {setup.font.name}
        </p>
        <p>
          <strong>Feature:</strong> {setup.font.feature}
        </p>
      </div>
    </section>
  );
};

export default Setup;
