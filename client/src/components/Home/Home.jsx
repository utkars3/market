import { useEffect,useContext } from "react"
import "./Home.scss";
import {fetchDataFromApi} from "../../utils/api"

import Banner from "./Banner/Banner"
import Category from "./Category/Category";
import Products from "../Products/Products";
import { Context } from "../../utils/context"
const Home = () => {
    const {categories,setCategories,products,setProducts}=useContext(Context);

    useEffect(()=>{
        getCategories()
        getProducts()
    },[])
    const getProducts=()=>{
        fetchDataFromApi("/api/products?populate=*").then((res)=> {
            console.log(res)
        // ye last me ?populate=* se saare data aa jaiga kyuki pahle image mnhi aa rhi thus
            setProducts(res);

    }); 
}

    const getCategories=()=>{
        fetchDataFromApi("/api/categories?populate=*").then((res)=> {
            console.log(res)
        // ye last me ?populate=* se saare data aa jaiga kyuki pahle image mnhi aa rhi thus
            setCategories(res);

    });           
    }

    return(
         <div>
            
            <Banner/> 
            <div className="main-content">
                <div className="layout">

                 <Category categories={categories}/>
                 <Products products={products} headingText="Popular Products"/>
                </div>
            </div>

            </div>);
};

export default Home;
