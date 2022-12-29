import React, { createContext, useEffect, useState } from 'react';
import { API_URL } from '../config';

export const AppContext = createContext(null);

const injectContext = (Component) => {
    const ContextWrapper = (props) => {

        const [store, setStore] = useState({
            tasks: [],
            users: [],
            currentUser: { name: 'lrodriguez' }
        })

        const [actions, setActions] = useState({
            getTasks: () => {
                fetch(`${API_URL}/tasks`)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore((preStore) => {
                            return { ...preStore, tasks: data }
                        })
                    })
            },
            createTask: (task) => {
                fetch(`${API_URL}/tasks`, {
                    method: 'POST',
                    body: JSON.stringify(task),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {
                        setStore((preStore) => {
                            return { ...preStore, tasks: preStore.tasks.concat(data) }
                        })
                    })
            },
            deleteTask: (id) => {
                fetch(`${API_URL}/tasks/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then((response) => response.json())
                    .then(() => {
                        actions.getTasks();
                    })
            },
            getUsers: () => {
                fetch(`${API_URL}/users`)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore((preStore) => {
                            return { ...preStore, users: data }
                        })
                    })
            },
        })

        useEffect(() => {
            // component did mount
            console.log('Cargando Contexto');
            actions.getUsers();

        }, [])

        return (
            <AppContext.Provider value={{ store, actions }}>
                <Component {...props} />
            </AppContext.Provider>
        )
    }

    return ContextWrapper;
}

export default injectContext;