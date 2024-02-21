import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const url = "https://fakestoreapi.com/products"

export default function Women() {
    const [home, setHome] = useState([])

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            setHome(data)
        })
    }, [])
    return (
        <>
            <h1>Women</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px 15px', margin: '50px 0px' }}>
                {
                    home.map(({ id, price, image, title }) => {
                        if (title.includes("Women")) {
                            return <Link to={`/the/${id}`}  className="cart" key={id}>
                                <div>
                                    <img style={{ width: '100%' }} src={image} alt="" />
                                </div>
                                <div>
                                    <h5>{title}</h5>
                                    <span>{price}</span>
                                </div>
                            </Link>
                        }
                    })
                }
            </div >
        </>
    )


}