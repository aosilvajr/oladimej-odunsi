import React from 'react';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-header">
          <div className="logo">
            <a href="/">ODUNSI</a>
          </div>

          <div className="navigation">
            <nav>
              <a href="/">About</a>
              <a href="/">Work</a>
              <a href="/">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
