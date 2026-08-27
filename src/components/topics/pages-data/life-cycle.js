export const classConstructor = `class MyComponent extends React.Component {  
    constructor(props) {  
        super(props);  
        this.state = { count: 0 };  
    }  
} `;

export const methodRender = `import React from 'react';  

class MyComponent extends React.Component {  
    constructor(props) {  
        super(props);  
        this.state = { count: 0 };  
    }  

    increment = () => {  
        this.setState((prevState) => ({ count: prevState.count + 1 }));  
    }  

    render() {  
        return (  
            <div>  
                <h1>Счетчик: {this.state.count}</h1>  
                <button onClick={this.increment}>Увеличить</button>  
            </div>  
        );  
    }  
}`;

export const didMountMethod = `componentDidMount() {  
    // Запрос данных  
    fetch('/api/data').then(response => response.json()).then(data => {  
        this.setState({ data });  
    });  
}`;

export const didUpdateMethod = `componentDidUpdate(prevProps) {  
    if (this.props.id !== prevProps.id) {  
        this.fetchData(this.props.id);  
    }  
}`;

export const willUnmountMethod = `componentWillUnmount() {  
    clearInterval(this.interval);  
} `;

export const hookLifeCycle = `import React, { useEffect, useState } from 'react';  

const MyComponent = ({ id }) => {  
    const [data, setData] = useState(null);  

    useEffect(() => {  
        // Код, аналогичный componentDidMount  
        fetch('/api/data').then(response => response.json()).then(data => {  
            setData(data);  
        });  

        // Код, аналогичный componentWillUnmount (функция очистки)  
        return () => {  
            // Очистка, если необходимо  
        };  
    }, []); // Пустой массив зависимостей вызывает эффект только при монтировании  

    useEffect(() => {  
        // Код, аналогичный componentDidUpdate  
        fetchData(id);  
    }, [id]); // Зависимость от id, вызывает эффект при изменении id  

    return <div>{data}</div>;  
};`;
