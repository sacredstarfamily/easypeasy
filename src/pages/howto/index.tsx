import type { NextPage } from "next";
import React, { useState } from "react";
import YoutubeEmbed from "../components/youtubeembed";
const HowtoPage: NextPage = ()=>{
    const [embed, setEmbed] = useState("")
    const AddVid = (id:string)=>{
        setEmbed(id)
    }
    return(
        <div>
            <center><h1>howto</h1>
            <input type="text" name="embedVideo" id="embedVideo" placeholder="video embed id" />
            <br/>
            <button onClick={()=>{var h = (document.getElementById("embedVideo")! as HTMLInputElement).value;AddVid(h)}}>AddVideo</button>
           
            <YoutubeEmbed embedId={embed} />
            </center>
        </div>
    )
}
export default HowtoPage;