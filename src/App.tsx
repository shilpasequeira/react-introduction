import React from 'react';
import { useState } from 'react';
import { Button } from 'antd';
import { Space, Card } from 'antd';

interface HeaderProps {
  title: string
}
const Header: React.FunctionComponent<HeaderProps> = ({title}) => {
  return <div>{title}</div>
}

function useCounter() {
  const [counter, setCount] = useState<number>(0)
  const decrement = () => { setCount(counter + 1) }
  const increment = () => { counter > 0 && setCount(counter - 1) }

  return [counter, decrement, increment] as const
}

const App: React.FunctionComponent = () => {
  const [counter, increment, decrement] = useCounter();

  return (
    <div className="App">
      <Button type="primary" onClick={increment}>+</Button>
      <span>{counter}</span>
      <Button type="primary" onClick={decrement}>-</Button>
    </div>
  );
}

export default App;
