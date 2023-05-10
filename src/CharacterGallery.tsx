import React from 'react'
import CharacterCard from './CharacterCard'
import './CharacterGallery.css'

type CharacterGalleryProps = {
    characters: {
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
    }[];
};

const CharacterGallery: React.FC<CharacterGalleryProps> = ({ characters }) => {
    return (
        <div className="character-gallery">
            {characters.map((character) => (
                <CharacterCard key={character.id} character ={character}/>
            ))}
        </div>
    )
}

export default CharacterGallery;