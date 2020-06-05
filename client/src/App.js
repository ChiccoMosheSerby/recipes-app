import React, { useEffect, useState } from 'react';
import './App.css';
import Resipe from './components/Resipe/Resipe';

const App = () => {

  const [resipes, setResipes] = useState([]);
  const [searchText, setSearchText] = useState('');
  // const [hostVar, setHostVar] = useState('http://localhost:4005');
  const [hostVar, setHostVar] = useState('');
// 

  useEffect(() => {
    getResipes();
  }, [searchText])

  const updateSearch = e => {
    e.preventDefault();
    setSearchText(e.target.elements.searchBar.value);
    e.target.elements.searchBar.value = '';
  }

  const getResipes = async () => {

    const response = await fetch(hostVar + "/getResipes",
      {
        method: 'POST',
        body: JSON.stringify({ searchText }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    const data = await response.json();
    // console.dir(data.hits);
    setResipes(data.hits);
  }



  return (
    <div className='App'>
      {
        resipes=='' ?
          <div className="start">
            <h2 className="startH1">Enter (English) keywords</h2>
            <h1 className="startH1 startH2">Get Recipes</h1>
            <form className="searchFprm" onSubmit={updateSearch}>
              <input name="searchBar" className="searchBar" type="text" />
              <button className="searchBtn" type="submit" >
                Search
        </button>
            </form>
            <img className="bonAppetit" src="/img/sticker-bon-appetit.png" alt="sticker-bon-appetit" />

            <img className="logoBottom" src="/img/sticker-bon-appetit.png" alt="sticker-bon-appetit" />

          </div>
          :
          <div id="top">
            <form className="searchFprm topSearch" onSubmit={updateSearch}>
              <input name="searchBar" className="searchBar" type="text" />
              <button className="searchBtn" type="submit" >
                Search
    </button>
            </form>
            <div className="resipesWrapper">
              {
                resipes?
                resipes.map((singleResepi, index) => (
                  <Resipe recipeId={index} key={index} image={singleResepi.recipe.image} title={singleResepi.recipe.label} calories={singleResepi.recipe.calories}
                    ingredientLines={singleResepi.recipe.ingredientLines}
                    healthLabels={singleResepi.recipe.healthLabels}
                    searchWord={searchText} />


                ))
                :
                null
              }
            </div>
            <a className="top" href="#top"><img className="topImg" src="/img/smooth_scroll_to_top.png" alt="scrool top img" /> </a>
            <img className="logoBottom" src="/img/sticker-bon-appetit.png" alt="sticker-bon-appetit" />

          </div>

      }


<p>&#169; CMS -ChiccoMosheSerby</p>

    </div >

  )
}
export default App;
