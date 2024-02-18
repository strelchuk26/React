import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { ICategory } from './ICategory';

function App() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/categories');
        const data: ICategory[] = response.data;
        setCategories(data);
      } catch (error) {
        console.error('Помилка при отриманні даних:', error);
      }
    };

    fetchData();
  }, []);

  return (

    <div className='cards'>
      {
        categories.map((item) => (
        <div key={item.id} className='card'>
          <h1>{item.name}</h1>
          <h2>{item.description}</h2>
          <h2>{item.dateCreated}</h2>
        </div>
        ))
      }
    </div>
  )
}

export default App
