import React from 'react'
import { useFectchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGriditem';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

   const { data:images, loading } = useFectchGifs();   

    // console.log (loading);
    // console.log (data);

//    const [images, setImages] = useState([]);

//     useEffect( () => {
//         getGifs(category)
//             .then(setImages)
//     }, [category])

    

    //getGifs(); 

    return (
        <>
            <h3 className="animate__animated animate__bounce animate__fadeIn">{ category }</h3>

           { loading && <p className="animate__animated animate__bounce animate__flash">Loading</p>}

            {<div className= "card-grid">
                

                    {
                        images.map( img => (
                            <GifGridItem 
                                key={ img.id }
                                { ...img}
                            />
                        ))
                    }

            
            </div>}
        </>
    )
}
    