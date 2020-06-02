import React, { useEffect, useState } from 'react';

import ShareLink from 'react-facebook-share-link'


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
                    <div className="btns">
                        <button className="searchBtn descBtn" onClick={handleDescClassName}>Description</button>
                        <button className="shareDiv">
                            <ShareLink link='https://recipes-app-prod.herokuapp.com'>
                                {link => (
                                    <a href={link} target='_blank'>Facebook</a>
                                )}
                            </ShareLink>
                        </button>
                        <button className="shareDivWTS">
                            <a href="https://api.whatsapp.com/send?text=Check this Recipes : https://recipes-app-prod.herokuapp.com" target="_blank">Whatsapp</a>

                        </button>
                    </div>
                </div>
                <div className={descClassName}>
                    <ul>
                        { !healthLabels? null:
                            healthLabels.map((singleHealthLabels, index) => (
                                <li key={index}>{singleHealthLabels}</li>
                            ))
                        }

                    </ul>
                    <ul>
                        <p style={{ fontWeight: 'bold' }}>ingredients</p>

                        { !ingredientLines?null:
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