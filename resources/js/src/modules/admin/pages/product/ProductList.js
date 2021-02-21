import React, {useState} from "react";
import Header from "../layout/Header";
import SideBar from "../layout/SideBar";

const ProductList = () => {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <SideBar />
                    </div>
                    <div className="col">
                        <h1>Products</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList;
