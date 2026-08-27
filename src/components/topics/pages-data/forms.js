export const rhfYup = `// App.js  
import React from 'react';  
import { useForm } from 'react-hook-form';  
import { yupResolver } from '@hookform/resolvers/yup';  
import * as yup from 'yup';  

// Определяем схему валидации с помощью yup  
const schema = yup.object().shape({  
  name: yup.string().required('Имя обязательно'),  
  email: yup.string().email('Неправильный адрес электронной почты').required('Email обязателен'),  
  password: yup.string().min(6, 'Пароль должен содержать минимум 6 символов').required('Пароль обязателен')  
});  

const App = () => {  
  // Используем хук useForm с резолвером yup  
  const { register, handleSubmit, formState: { errors } } = useForm({  
    resolver: yupResolver(schema)  
  });  

  // Функция для обработки успешной отправки формы  
  const onSubmit = (data) => {  
    console.log(data);  
  };  

  return (  
    <div>  
      <h1>Форма регистрации</h1>  
      {/* Оборачиваем форму в тег <form> и назначаем обработчик на отправку */}  
      <form onSubmit={handleSubmit(onSubmit)}>  
        {/* Поле имени */}  
        <div>  
          <label>Имя:</label>  
          <input {...register('name', { required: 'Имя обязательно' })} />  
          {/* Отображаем ошибку, если она есть */}  
          {errors.name && <p>{errors.name.message}</p>}  
        </div>  

        {/* Поле электронной почты */}  
        <div>  
          <label>Email:</label>  
          <input type="email" {...register('email', { required: 'Введите email' })} />  
          {/* Отображаем ошибку, если она есть */}  
          {errors.email && <p>{errors.email.message}</p>}  
        </div>  

        {/* Поле пароля */}  
        <div>  
          <label>Пароль:</label>  
          <input type="password" {...register('password', { required: 'Пароль обязателен', minLength: { value: 6, message: 'Пароль должен содержать минимум 6 символов' }}})} />  
          {/* Отображаем ошибку, если она есть */}  
          {errors.password && <p>{errors.password.message}</p>}  
        </div>  

        {/* Кнопка для отправки формы */}  
        <button type="submit">Отправить</button>  
      </form>  
    </div>  
  );  
};  

export default App;`;

export const prompts = [
  {
    id: 1,
    text: "Управляемые компоненты форм: В этом подходе значения полей формы хранятся в состоянии компонента. Каждое поле формы связано с состоянием и обновляется через callback-функцию.",
  },
  {
    id: 2,
    text: "Неуправляемые компоненты форм: В этом подходе значения полей формы хранятся непосредственно в DOM, а не в состоянии компонента.",
  },
  {
    id: 3,
    text: "Ref-подход: В этом случае значения полей формы считываются через ref, которые позволяют получить доступ к DOM-элементам. Этот подход может быть удобен (нет😐), когда тебе нужно быстро получить значения полей без явного сохранения их в состояние компонента.",
  },
  {
    id: 4,
    text: "Библиотеки управления формами: Существуют библиотеки, такие как React Hook Form и Formik , которые предоставляют более высокоуровневые решения для работы с формами. Они упрощают управление состоянием, валидацией, обработкой отправки и другими аспектами работы с формами.",
  },
];
