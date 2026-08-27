export const onClick = `const handleClick = () => {
  console.log('Кликнули!');
}

const MyComponent = () => {
  return (
    <button onClick={handleClick}>Нажми меня</button>
  );
}`;

export const onChange = `const handleChange = (event) => {
  console.log('Изменилось значение:', event.target.value);
}

const MyComponent = () => {
  return (
    <input type="text" onChange={handleChange} />
    или
    <input type="text" onChange={event => handleChange(event)} />
  );
}`;

export const onSubmit = `const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Форма отправлена!');
}

const MyComponent = () => {
  return (
    <form onSubmit={handleSubmit}>
      {/* поля формы */}
      <button type="submit">Отправить</button>
    </form>
  );`;

export const onMouseOver = `const handleMouseOver = () => {
  console.log('Курсор наведен!');
}

const MyComponent = () => {
  return (
    <div onMouseOver={handleMouseOver}>Наведите курсор на меня</div>
  );
}`;

export const onKeyDown = `const handleKeyDown = (event) => {
  console.log('Нажата клавиша:', event.key);
}

const MyComponent = () => {
  return (
    <input type="text" onKeyDown={handleKeyDown} />
  );
}`;

export const eventObject = `
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
    console.log(e.target.value);  
};  

<input type="text" onChange={handleChange} />


const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {  
    console.log('Button clicked');  
};  

<button onClick={handleClick}>Click me</button>


const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {  
    console.log('Input focused');  
};  

<input type="text" onFocus={handleFocus} />


const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {  
    console.log('Mouse entered');  
};  

<div onMouseEnter={handleMouseEnter}>Hover over me</div>

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {  
    console.log('Key pressed:', e.key);  
};  

<input type="text" onKeyDown={handleKeyDown} />  


const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {  
    e.preventDefault();  
    console.log('Form submitted');  
};  

<form onSubmit={handleSubmit}>  
    <button type="submit">Submit</button>  
</form>`;
