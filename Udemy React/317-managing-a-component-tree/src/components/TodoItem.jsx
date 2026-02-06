import {useState} from "react";

export default function TodoItem(props){
    // const [clicked, setClicked] = useState(false);

    // function lineThrough(){
    //     setClicked((prev) => !prev);
    // }

    return(
        // This function onChecked will only be called once the user click on the item ( not instantly -- Previous syntax )
        // {props.onChecked(props.id)-- This would call the function instantly as soon as the page loads.}
       <div onClick={() =>{
        props.onChecked(props.id)
       }}>
            <li>{props.text}</li>
       </div>
    )
}