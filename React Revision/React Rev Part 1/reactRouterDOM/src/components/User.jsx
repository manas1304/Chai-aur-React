import {useParams} from 'react-router-dom'

export default function User(){

    const {id} = useParams();

    return (
        <>
            <div className="bg-gray-500 text-white text-3xl p-4 text-center">User: {id}</div>
        </>
    )

}