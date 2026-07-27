import { Component } from "react";
import { login } from "../../utils/login";

export class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, user: props.userData };
    this.increment = this.increment.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await login(this.state.user);
      if (!response.access_token) {
        throw new Error("Ошибка логина");
      }
      console.log("Токен получен");
    } catch (error) {
      console.log(error);
    }
  }

  shouldComponentUpdate(nextProp, nextState) {
    if (nextState.count % 2 === 0) {
      return true;
    } else return false;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "Счетчик - четный, поэтому видим это сообщение: ",
      this.state.count,
    );
  }

  componentWillUnmount() {
    console.log("Компонент размонтирован");
  }

  increment() {
    this.setState((prev) => {
      return {
        ...prev,
        count: prev.count + 1,
      };
    });
  }

  render() {
    return (
      <>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+++Class+++</button>
      </>
    );
  }
}

// export default LifecycleComponent;
