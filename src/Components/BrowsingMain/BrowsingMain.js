import React from 'react'
import ProductCard from '../ProductCard/ProducrCard'

const BrowsingMain = () => {
    const skinsData = [{
        imageSource: "https://i.pinimg.com/originals/af/b9/0e/afb90ea9c55bf1299b0b53bc56fffc00.png",
        name: "M4A4 Neo-Noir",
        price_min: "3.04",
        price_max: "209.73"
    }, {
        imageSource: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957OfBdjhQ09C_k4ifqPv1IbzU2G8D7sAo377FptWl21C3_kRram3zJ9PBc1U3ZFHU_QS_ybi-gsO66snXiSw0v9hgqjA",
        name: "AUG Bengal Tiger",
        price_min: "23.1",
        price_max: "100.2"
    }, {
        imageSource: "https://i.pinimg.com/originals/34/6e/77/346e7795dbc04ce26c9b16d9e23d497a.png",
        name: "USP-P Neo-Noir",
        price_min: "10.78",
        price_max: "300.8"
    }]


    let displayData = [];
    for (var i = 0; i < 20; i++) {
        var chosen = Math.floor(Math.random() * skinsData.length);

        displayData[i] = skinsData[chosen];
    }

    return (
        <div className='container'>
            <div className="row g-4 text-center">
                {displayData.map(skin => <div className="col-sm-12 col-md-6 col-lg-4">
                    <ProductCard img={skin.imageSource} name={skin.name} price_min={skin.price_min} price_max={skin.price_max} />
                </div>)}
            </div>
        </div>
    )
}

export default BrowsingMain