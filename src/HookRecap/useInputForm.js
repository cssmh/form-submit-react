import { useState } from "react"

const useDefaultCode = (defaultValue = null) => {
    const [value, setOnchange] = useState(defaultValue)

    const handleButton = e => {
        setOnchange(e.target.value)
    }
    return [value, handleButton]
}

export default useDefaultCode;