import { Link, Outlet } from "react-router-dom"


const Product = () => {
    return (
        <div className=" flex items-center justify-center gap-10 text-2xl font-bold underline ">

            <Link to={'/product/men'}>Men col</Link>
            <Link to={'/product/women'} >Wemen col</Link>
            <Outlet/>
        </div>
    )
}

export default Product