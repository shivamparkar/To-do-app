import React from 'react';
import  './components/ListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flipmove from 'react-flip-move';





function ListItem(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div className='list' key={"item.key"}>
                <p>
                   <input type="text" 
                    id={item.key} 
                    value = {item.text}   
                    onChange ={
                        (e) =>{
                            props.setUpdate(e.target.value, item.key)
                        }
                    }
                   />
                <span>
                    <FontAwesomeIcon className="faicons"
                     icon="trash" 
                     onClick={() => props.deleteItems(item.key) 
                     }/>
                </span>
                </p>
            </div>
        })
    return(
        <div>
        <Flipmove duration={300} easing="ease-in-out">
        {listItems}
        </Flipmove>
        </div>
        
    );
}

export default listItems;