export const codeSimple = `// Родительский компонент  
const ParentComponent = () => {  
  const message = "Привет, Redev!";  
  return <ChildComponent message={message} />;  
}  

// Дочерний компонент  
const ChildComponent = (props) => {  
  return <div>{props.message}</div>;  
}`;

export const codeDestructuring = `// Родительский компонент  
const ParentComponent = () => {  
  const message = "Привет, Redev!";  
  return <ChildComponent message={message} />;  
}  

// Дочерний компонент  
const ChildComponent = (props) => {  
  return <div>{props.message}</div>;  
}  

// либо сразу сделать деструктуризацию, ведь props это обычный объект  
const ChildComponent = ({ message }) => {  
  return <div>{message}</div>;  
}`;

export const codeClassComponent = `// ParentComponent.js  
import ChildComponent from './ChildComponent';  

const ParentComponent2 = () => <div>parentComponent2</div>  
const obj = { name: 'Pasha' }  

const ParentComponent = () => {  
  return (  
    <div>  
      <ChildComponent  
        name={'abc'}  
        age={25}  
        isMan={true}  
        parentComponent2={ParentComponent2}  
        object={obj}  
      />  
    </div>  
  );  
}  

export default ParentComponent;  

// ChildComponent.js  
import React from 'react'  

class ChildComponent extends React.Component {  
  render() {  
    return (  
      <div>  
        {this.props.name}  
        {this.props.age}  
        {this.props.isMan ? "Man" : "Women"}  
        {this.props.parentComponent2()}  
        {this.props.object.name}  
      </div>  
    );  
  }  
}  

export default ChildComponent`;
