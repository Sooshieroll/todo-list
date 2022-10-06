import React, { useState } from 'react';
import ListItem from './ListItem';
import './index.css';

function MyList(props) {
    const [tasks, setTasks] = useState(props.theList);
    const clearList = () => {
        console.log('clearing list...');
        setTasks([]);
    }

    const renderToDoItems = () => {
        let todoItems = props.theList.map((item, index) => {
            return <ListItem task={item} key={index} />;
        });
        return todoItems

    }

    const handleChange = e => {
        e.preventDefault();

        const newItem = e.target.value;
        setNewItem(newItem)
    }

    return (
        <div>
            <h1>Things I should stop procrastinating:</h1>
            <ul>
                {renderToDoItems()}
            </ul>
            <button onClick={clearList}>Clear List</button>
        </div>
    );
}

export default MyList;

    //addItem
    //clearList
    //handleChange
    //renderTodos
    //add a form inside of the return statement

