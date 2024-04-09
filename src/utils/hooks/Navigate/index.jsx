import { useNavigate} from "react-router-dom";
import { useEffect } from "react";

function Navigate ({url}) {
    const navigate = useNavigate()

    useEffect (() => {
        navigate(url)
    },[])
}

export default Navigate