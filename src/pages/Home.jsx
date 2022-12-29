import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../store/AppContext'
import { FaTrash } from 'react-icons/fa';

const Home = () => {
    const { store, actions } = useContext(AppContext);
    //console.log(store);
    const [counter, setCounter] = useState(1);

    const addTask = () => {
        let task = {
            label: `Task ${counter}`,
        }
        actions.createTask(task);
        setCounter(counter => counter + 1);
    }

    useEffect(() => {
        // componentDidMount

        console.log('Entrando a Home');

        return () => {
            // componentWillUnmount
            console.log('Saliendo de Home');
        }

    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h1>Listado de Tareas</h1>
                    <ul className="list-group mb-3">
                        {
                            store?.tasks.length > 0 &&
                            store?.tasks.map((task) => {
                                return (
                                    <li key={task?.id} className="list-group-item list-group-item-action d-flex justify-content-between">
                                        <span>{task.id}: {task?.label}</span>
                                        <span className='text-danger' onClick={() => actions.deleteTask(task.id)}><FaTrash /></span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <button className='btn btn-warning btn-sm' onClick={addTask}>
                        Add Task
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home