import React from 'react'

import './homepage.styles.scss'

const HomePage = () =>(
    <div className = 'homepage'>
        <div className = 'directory-menu'>
            <div className = 'menu-item'>
                <div classNAme = 'content'>
                    <h1 className = 'tittle'> HATS</h1>
                    <span className = 'subtitle'>SHOP NOW</span> 
                </div>
            </div>
            <div className = 'menu-item'>
            <div classNAme = 'content'>
                <h1 className = 'tittle'> JACKETS</h1>
                <span className = 'subtitle'>SHOP NOW</span> 
            </div>
        </div>
        <div className = 'menu-item'>
                <div classNAme = 'content'>
                    <h1 className = 'tittle'> SNEAKERS</h1>
                    <span className = 'subtitle'>SHOP NOW</span> 
                </div>
            </div>
            <div className = 'menu-item'>
                <div classNAme = 'content'>
                    <h1 className = 'tittle'>WOMENS </h1>
                    <span className = 'subtitle'>SHOP NOW</span> 
                </div>
            </div>
            <div className = 'menu-item'>
                <div classNAme = 'content'>
                    <h1 className = 'tittle'> MENS</h1>
                    <span className = 'subtitle'>SHOP NOW</span> 
                </div>
            </div>
        </div>
    </div>
)
export default HomePage