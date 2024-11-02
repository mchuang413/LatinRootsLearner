import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Latin Roots Learner</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>&copy; 2023 Latin Roots Learner. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
