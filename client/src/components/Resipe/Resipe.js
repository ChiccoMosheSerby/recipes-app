import React from 'react';


const Resipe = ({ image, title, calories, ingredientLines, healthLabels }) => {
    let calor = (Math.round(calories * 100) / 100).toFixed(2);
    return (
        <div className="mainReciWrap">
            <h1 className="reciTitle">{title}</h1>

            <div className="reci">

                <div>
                    <img className="dishImg" src={image} alt={title} />
                </div>
                <div>
                    <ul>
                        {
                            healthLabels.map((singleHealthLabels, index) => (
                                <li key={index}>{singleHealthLabels}</li>
                            ))
                        }

                    </ul>
                    <ul>
                        <p style={{fontWeight:'bold'}}>ingredients</p>

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