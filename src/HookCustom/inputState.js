import { useState } from "react"

const useCustomForm = () => {
    const [value, setValue] = useState()

    const handleChangeButton = e => {
        setValue(e.target.value);
    }
    return [value, handleChangeButton]
}

export default useCustomForm;