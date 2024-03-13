import "../../styles/components/collapse.css"
import { useState,useRef } from "react"
import upArrow from "../../assets/img/up-arrow.png"

function Collapse ({title,id,children}) {

    const [isOpened, setIsOpened] = useState(false)
    const contentRef = useRef()

    function toggleContent () {
        setIsOpened(current => !current)
    }

    return (
        <div className="menu">
            <div className="menuBar">
                <span>{title}</span>
                <img src={upArrow} className={isOpened ? "arrowDown" : ""} onClick={toggleContent} alt="Flèche vers le haut" />
            </div>
            <div className={isOpened ? "menuContent" : "menuContent hidden"} ref={contentRef} style={(contentRef.current) ? {height: (contentRef.current.scrollHeight + 10)+ "px"} : {height: "0px"}}>
                {children}
            </div>
        </div>
    )
}

export default Collapse