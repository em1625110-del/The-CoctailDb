import React from 'react'
import './style.css'

function Footer() {
    return (
        <footer>
            <div className='footer-div'>
            <nav>
                <ul>
                    <li>© 2025 TheCocktailDB. <br />
                    Proudly built in the UK <img style={{marginTop:'17px'}} src="https://www.thecocktaildb.com/images/icons/flags/big/16/gb.png" alt="" /></li>
                </ul>
            </nav>
            <nav>
                <ul>
                  <li>Socials: 
                    <img src="https://www.thecocktaildb.com/images/facebook_icon.png" alt="" />
                    <img src="https://www.thecocktaildb.com/images/twitter_icon.png" alt="" />
                    <img src="https://www.thecocktaildb.com/images/discord_icon.png" alt="" />
                  </li>
                </ul>
            </nav>
            <nav>
            <ul className='footer-ul'>
                <li>Missing</li>
                <li>About</li>
                <li>Faq</li>
                <li>Contact</li>
            </ul>
            </nav>
            </div>
            <div className='footer-coctail'>
                <img src="https://www.thecocktaildb.com/images/logo-tsdb.png" alt="" />
                <img src="https://www.thecocktaildb.com/images/logo-tadb.png" alt="" />
                <img src="https://www.thecocktaildb.com/images/logo-tmdb.png" alt="" />
            </div>
        </footer>
    )
}

export default Footer

