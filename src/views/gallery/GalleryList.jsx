import { useEffect } from 'react';
import Data from '../../data/Data.json'
import { Link } from 'react-router-dom';

const ListView = () => {
    const galleryData = Data.galleryData;
    useEffect(()=> {
        
        return () => {
            console.log(galleryData);
        };
    }, []);
    return (
        <div>
            <ul>
                {galleryData.map( (item)=>(
                    <li key={item.id}>
                        <Link to={`../gallery/${item.id}`}>
                        <p>{item.title}</p>
                        <p>{item.date}</p>
                        <p>{item.imageSrc}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListView;