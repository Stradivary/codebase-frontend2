// Class Component
import React  from 'react';
import styles from './styles.scoped.css';

export default class Welcome extends React.Component {
  state = {
    isVisible:false
  };

  handleClick = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div>
        <button className={styles.button} onClick={this.handleClick}>
          Saya Hello
        </button>
        {this.state.isVisible ? <Greeting name="Robert" /> : <div />}
      </div>
    );
  }
}

const Greeting = props => {
  const { name } = props;
  return <h1>Hello {name} </h1>;
};

// Functional Component
// import React, { useState } from 'react';
// import styles from './styles.scoped.css';

// const Welcome = () => {
//   const [isVisible, setVisible] = useState(false);

//   const handleClick = () => {
//     setVisible(!isVisible);
//   };

//   return (
//     <div>
//       <button className={styles.button} onClick={handleClick}>Say Hello</button>
//       {isVisible ? <Greeting name="Robert" /> : <div />}
//       <br />
//     </div>
//   );
// };

// const Greeting = props => {
//   const { name } = props;

//   return <h1>Hello {name}</h1>;
// };

// export default Welcome;


