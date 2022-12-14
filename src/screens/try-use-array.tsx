import React from 'react'
import {useArray} from 'utils'

interface P { name: string, age: number}
export const TsReactTest = () => {
    const persons: P[] = [
        {name: 'tom', age: 25},
        {name: 'ma', age: 22}
    ];
    const {value, clear, removeIndex, add} = useArray(persons)
    
    return (
        <div>
            <button onClick={() => add({name: 'john', age: 22})}>add join</button>
            <button onClick={() => removeIndex(0)}>remove 0</button>
            <button style={{marginBottom: '50px'}} onClick={() => clear()}>clear</button>
            {value.map((person, index) => 
                    <div style={{marginBottom: '30px'}}>
                        <span style={{color: 'red'}}>{index}</span>
                        <span>{person.name}</span>
                    </div>
                )}
        </div>
    )
}
