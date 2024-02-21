import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const url = "https://fakestoreapi.com/products/"

export default function TheCompanent() {
    const { id } = useParams()
    const [home, setHome] = useState()
    useEffect(() => {
        axios.get(url + id).then(({ data }) => {
            setHome(data)
            console.log(data);
        })
    }, [])

    return (
        <>
            <div  style={{ display: 'flex', flexWrap: 'wrap', gap: '50px 15px', margin: '50px 0px' }}>
                <div key={id} className="cart">
                    <div>
                        {/* <img style={{ width: '100%' }} src={home.image} alt="" /> */}
                    </div>
                    <div>
                        {/* <h5>{home.title}</h5> */}
                        {/* <span>{home.price}</span> */}
                    </div>
                </div>
            </div >
        </>
    )
}