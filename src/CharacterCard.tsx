import React from 'react';

type CharacterCardProps = {
    character: {
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin: {
            name: string;
            url: string;
        };
        location: {
            name: string;
            url: string;
        };
        image: string;
        episode: string[];
        url: string;
        created: string;
    }
}

const CharacterCard: React.FC<CharacterCardProps> = ({character}) => {
    return (
        <div className="character-card">
            <h2> {character.name}</h2>
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
            <img src={character.image} alt={character.name}/>
        </div>
    )
}


export default CharacterCard;