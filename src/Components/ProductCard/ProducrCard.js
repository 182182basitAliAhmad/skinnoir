import React from 'react'

const ProducrCard = (props) => {
    return (
        <div className="card text-light border border-2" style={{ backgroundColor: "#1c1e22" }}>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name + " Skin"}</h5>
                <p className="card-text">
                    {"$" + props.price_min + " - " + "$" + props.price_max}
                </p>
                <a href="#" className="btn btn-warning"><strong>View Details</strong></a>
            </div>
        </div>
    )
}

export default ProducrCard