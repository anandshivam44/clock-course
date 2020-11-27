import React, {useState, useEffect} from 'react';
import  axios from 'axios';
import CardMod from '../Card/Card'



function ListPost() {

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setData(response.data));
    }, []);


    return (
        <>

{
        data.map(todo => (
            <CardMod 
            img="https://cdn.vox-cdn.com/thumbor/zEZJzZFEXm23z-Iw9ESls2jYFYA=/89x0:1511x800/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/55717463/google_ai_photography_street_view_2.0.jpg"
            title={todo.title}
            text={todo.body}
            /> 
          
                          ))
      }

       
           
        </>
    )
}

export default ListPost;    