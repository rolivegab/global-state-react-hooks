import React from 'react';
import Counter from 'components/Counter';
import GlobalState, { useGlobalState } from 'context';

const Son = () => {
  const {
    grandFather: {
      father: {
        son: {
          increment,
          value
        }
      }
    }
  } = React.useContext(GlobalState)()

  return <Counter {...{increment, value}} />
}

const Father = () => {
  const {
    grandFather: {
      father: {
        increment,
        value
      }
    }
  } = React.useContext(GlobalState)()

  return <Counter {...{increment, value}}>
    <Son />
  </Counter>
}

const GrandFather = () => {
  const {
    grandFather: {
      increment,
      value,
    }
  } = React.useContext(GlobalState)()

  return <Counter {...{increment, value}}>
    <Father />
  </Counter>
}

const App = () => (
  <GlobalState.Provider value={useGlobalState}>
    <GrandFather />
  </GlobalState.Provider>
)

export default App;
