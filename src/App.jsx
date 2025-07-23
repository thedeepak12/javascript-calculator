import { useState } from 'react';
import Button from './components/Button';
import Display from './components/Display';
import { buttons } from './utils/buttons';

function App() {
  const [expression, setExpression] = useState('');
  const [current, setCurrent] = useState('0');
  const [evaluated, setEvaluated] = useState(false);

  const isOperator = (val) => /[+\-*/]/.test(val);

  const handleClick = (value) => {
    if (value === 'AC') {
      setExpression('');
      setCurrent('0');
      setEvaluated(false);
    } else if (value === '=') {
      try {
        const result = eval(expression);
        setCurrent(result.toString());
        setExpression(result.toString());
        setEvaluated(true);
      } catch {
        setCurrent('Error');
        setExpression('');
      }
    } else if (isOperator(value)) {
      if (evaluated) {
        setExpression(current + value);
        setEvaluated(false);
      } else if (!expression || isOperator(expression.slice(-1))) {
        setExpression(expression.slice(0, -1) + value);
      } else {
        setExpression(expression + value);
      }
      setCurrent(value);
    } else if (value === '.') {
      if (!current.includes('.')) {
        setCurrent(current + value);
        setExpression(expression + value);
      }
    } else if (current === '0' || evaluated) {
      setCurrent(value);
      setExpression(evaluated ? value : expression + value);
      setEvaluated(false);
    } else {
      setCurrent(current + value);
      setExpression(expression + value);
    }
  };

  return (
    <div className="min-h-screen bg-[#c2c2d6] flex items-center justify-center">
      <div className="bg-[#040404] p-2 rounded shadow-lg w-80">
        <Display expression={expression} current={current} />
        <div className="grid grid-cols-4 gap-0">
          {buttons.map((btn) => (
            <Button key={btn.id} {...btn} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
