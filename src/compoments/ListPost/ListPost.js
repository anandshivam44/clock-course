import React, {useState, useEffect} from 'react';
import  axios from 'axios';
import CardMod from '../Card/Card';
import "./style.css";



function ListPost() {

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts',{
        params: {
          _limit: 10
         }
      })
        .then(response => setData(response.data));
    }, []);

    return (
        <>
 <div class="cards-1 section-gray">
            <div class="container">
                <div class="row">
                    
{
        data.map(todo => (
            <CardMod 
            img="https://cdn.vox-cdn.com/thumbor/zEZJzZFEXm23z-Iw9ESls2jYFYA=/89x0:1511x800/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/55717463/google_ai_photography_street_view_2.0.jpg"
            title={todo.title}
            text={todo.body}
            />       ))
      }
</div>
</div>
</div>
       
           
        </>
    )
}

export default ListPost;    