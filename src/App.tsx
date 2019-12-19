import React from 'react';
import GrandFather from 'components/GrandFather';
import GlobalContext from 'context';

const {
  grandFather: {
    GrandFatherProvider
  }
} = GlobalContext

const App = () => (
  <GrandFatherProvider>
    <GrandFather />
  </GrandFatherProvider>
)

export default App;
