import React from 'react'

/*type Props = {
    name: string
    age: string
    //name:string[]
}
export default function Greetings(props: Props) {
    return <h2> { props.name } Alter: {props.age} </h2>
}*/

type Props = {
    names:string[];
}

function DisplayName(props:Props){
    return (
        <div>
            {props.names.map(currentName => <h1>Hallo {currentName}!</h1>)}
        </div>
    )
}

export default DisplayName;