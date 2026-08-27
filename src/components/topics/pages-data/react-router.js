export const browserRouter = `import { BrowserRouter } from 'react-router-dom';  

function App() {  
  return (  
    <BrowserRouter>  
      <YourRoutes />  
    </BrowserRouter>  
  );  
}`;

export const routes = `import { Routes, Route } from 'react-router-dom';  

function YourRoutes() {  
  return (  
    <Routes>  
      <Route path="/" element={<Home />} />  
      <Route path="/about" element={<About />} />  
    </Routes>  
  );  
}`;

export const route = `<Route path="/contact" element={<Contact />} />`;

export const link = `import { Link } from 'react-router-dom';  

function Navigation() {  
  return (  
    <nav>  
      <Link to="/">Home</Link>  
      <Link to="/about">About</Link>  
      <Link to="/contact">Contact</Link>  
    </nav>  
  );  
}`;

export const outlet = `import { Outlet } from 'react-router-dom';  

function Layout() {  
  return (  
    <div>  
      <Header />  
      <Outlet />  
    </div>  
  );  
}`;

export const useParams = `import { useParams } from 'react-router-dom';  

function User() {  
  const { userId } = useParams();  

  return <h2>User ID: {userId}</h2>;  
}`;

export const useNavigate = `import { useNavigate } from 'react-router-dom';  

function Login() {  
  const navigate = useNavigate();  

  const handleLogin = () => {  
    // Логика входа...  
    navigate('/dashboard'); // Перейти на страницу кабинета после входа  
  };  

  return <button onClick={handleLogin}>Login</button>;  
}`;

export const useLocation = `import { useLocation } from 'react-router-dom';  

function CurrentLocation() {  
  const location = useLocation();  

  return <div>Current location: {location.pathname}</div>;  
}`;

export const useRoutes = `import { useRoutes } from 'react-router-dom';  

function AppRoutes() {  
  const routes = [  
    { path: '/', element: <Home /> },  
    { path: '/about', element: <About /> },  
    { path: '/contact', element: <Contact /> },  
  ];  

  return useRoutes(routes);  
}`;

export const useSearchParams = `import { useSearchParams } from 'react-router-dom';  

function SearchPage() {  
  // Хук для работы с параметрами поискового запроса  
  const [searchParams, setSearchParams] = useSearchParams();  

  // Извлекаем параметр 'query' из поисковых параметров  
  const query = searchParams.get('query') || '';  

  const handleSearch = (event) => {  
    event.preventDefault();  
    // Изменяем параметр 'query' в URL  
    setSearchParams({ query: event.target.searchInput.value });  
  };  

  return (  
    <div>  
      <h1>Search Page</h1>  
      <form onSubmit={handleSearch}>  
        <input  
          type="text"  
          name="searchInput"  
          defaultValue={query} // Устанавливаем значение по умолчанию для инпута  
        />  
        <button type="submit">Search</button>  
      </form>  
      <p>Current query: {query}</p>  
    </div>  
  );  
}`;
