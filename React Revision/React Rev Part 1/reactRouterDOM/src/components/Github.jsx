import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

export default function Github(){
    const [data, setData] = useState([]);

    useEffect(() =>{
        fetch('https://api.github.com/users/manas1304')
        .then((res) => res.json())
        .then((data) =>{
            console.log(data)
            setData(data)
        })
    }, [])

    return (
        <>
            <div className="bg-gray-500 text-white text-3xl p-4 text-center">
                Name: {data.name}
                <br />
                Github Followers:{data.followers}
                <img src={data.image_url} width={300} />
            </div>
        </>
    )

}