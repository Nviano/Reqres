import { useQuery } from 'react-query';

const fetchUsers = async () => {
    const response = await fetch(`https://reqres.in/api/users?page=2`);
    if (!response.ok) {
        throw new Error('Hubo un error cargando la lista de usuarios');
    }
    return response.json();
}

const useUsers = () => {

    return useQuery('USERS', fetchUsers, {
        staleTime: 2000,
    })
}

export default useUsers;