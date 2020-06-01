import React, { useEffect, useState } from 'react';


const Resipe = ({ image, title, calories, ingredientLines, healthLabels }) => {
    let calor = (Math.round(calories * 100) / 100).toFixed(2);
    const [descClassName, setDescClassName] = useState('close');

    const handleDescClassName = () => {
        if (descClassName == 'close') {
            setDescClassName('open')

        }
        else {
            setDescClassName('close')

        }
    }

    return (
        <div className="mainReciWrap">
            <h1 className="reciTitle">{title}</h1>

            <div className="reci">

                <div>
                    <img className="dishImg" src={image} alt={title} />
                    <button className="searchBtn descBtn" onClick={handleDescClassName}>Description</button>
                </div>
                <div className={descClassName}>
                    <ul>
                        {
                            healthLabels.map((singleHealthLabels, index) => (
                                <li key={index}>{singleHealthLabels}</li>
                            ))
                        }

                    </ul>
                    <ul>
                        <p style={{ fontWeight: 'bold' }}>ingredients</p>

                        {
                            ingredientLines.map((singleIngredientLines, index) => (
                                <li key={index}>{singleIngredientLines}</li>
                            )
                            )
                        }
                    </ul>
                </div>
            </div >
        </div>
    );
}

export default Resipe;