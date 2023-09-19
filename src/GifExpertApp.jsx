import {useState} from 'react'
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (category)=>{
      if(categories.includes(category.toLowerCase()))return;
      setCategories([category.toLowerCase(), ...categories ]);
     }

  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory
    onNewCategory={(value)=>onAddCategory(value)}
    />
      {categories.map( (categories)=>(
        <GifGrid key={categories} category={categories}/>
      ) )
      }
    
    </>
    
  )
}
