import React from "react";
import NavBar from "../Share/NavBar/NavBar";
// import SlideBanner from './SlideBanner/SlideBanner'
// import ModalPost from '../PagePosts/ModalPost/ModalPost'
// imp  ort PostHeader from './PostHeader/PostHeader';
// import PostsData from "../PagePosts/PostsData/PostsData";
// import Footer from './Footer/Footer';
// import Posts from "./Posts/Posts";
import InvoiceBill from "../Share/InvoiceBill/InvoiceBill";
function PageHome() {
    return (
        <>
            <NavBar />
            {/* <SlideBanner/> */}
            {/* <ModalPost/> */}
            {/* <PostHeader />
            <Posts />
            <Footer /> */}
            <InvoiceBill/>
        </>
    );
}

export default PageHome;