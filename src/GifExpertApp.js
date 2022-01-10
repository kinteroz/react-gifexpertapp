import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    //const categories = ['Naruto','One Piece', 'Dragon Ball' ]

    const [categories, setCategories] = useState(['Naruto' ])


    /*const handleAgregar = ()=>{

        //setCategories([...categories,'One Punch']);
        setCategories(cats =>[...cats,'One Punch']);

    }*/


    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map((category,i)=>
                         (<GifGrid 
                            key ={category}
                            category={category}/>)
                    )
                }
            </ol>

        </div>
    )
}
