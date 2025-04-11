import './App.css';
import { useState } from 'react';

/*the goal of this project is to create a simple react Click counter
application that allows the user to increase and decrease a count value
by clicking the respective bttons. the appplication should also include
a maximum count limit of 10.*/

//requirement: use React functional component with hooks (useState).

  const Increase = () => {
    
    const [countValue, setCountValue] = useState(0);

    const handleCount = () => {
      setCountValue(preCount => {
        if (preCount >= 10) {
          alert('You have reached the maximum count');
          return preCount;
        }

        return preCount + 1;
      });
      
      
      
    };

    const decrease = () => {
      if (countValue > 0) {
        setCountValue(countValue - 1)
      }
      


    };
    
    
 
  return(
    <div className="App">
      <div className="content" id='count'>{countValue}</div>
      <button onClick={handleCount} disabled={countValue > 10}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Increase;
