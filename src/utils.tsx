import { useState } from 'react'
export const useArray = <T,>(initalArray: T[]) =>{
    const [value, setValue]  =  useState(initalArray)
    return {
        value,
        setValue,
        add: (item: T) => setValue([...value, item]),
        clear: () => setValue([]),
        removeIndex: (index: number) => {
            const copy = [...value]
            copy.splice(index, 1)
            setValue(copy)
        }
    }
}

