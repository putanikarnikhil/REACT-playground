import { useState } from "react"

export default function LikeButton(){

    let [isLiked,setIsLiked]=useState(false);
    let toggleLike=()=>{
        setIsLiked(!isLiked);
        console.log(!isLiked);
    };
        
     
    let likeStyle={color:"red"};
    let greatStyle={color:"orange"};



    // function Count(){
    //     setclick=click+1;
    //     console.log(click);
    //      console.log(Count);

    // }

     return (
        <div>
            <p onClick={toggleLike}>
            {isLiked ? (
                     <i class="fa-solid fa-heart" style={greatStyle}></i>
                ): (
                    <i class="fa-regular fa-heart"></i>
                )}                                 
               
            </p>
        </div> 
          
    );
}