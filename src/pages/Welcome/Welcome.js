// Functional Component
// import React, { useState } from 'react';
// import styles from './styles.scoped.css';

// function Welcome() {
//   const [counter, setCounter] = useState(0);

//   const handleIncrement = () => {
//     setCounter(counter + 1);
//   };

//   return (
//     <button className={styles.button} onClick={handleIncrement}>
//       Counter: {counter}
//     </button>
//   );
// }

// export default Welcome;



// Class Component
import React from 'react';
import styles from './styles.scoped.css';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <button className={styles.button} onClick={this.handleIncrement}>
        Counter: {this.state.counter}
      </button>
    );
  }
}
