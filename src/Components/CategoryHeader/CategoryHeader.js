import React from 'react'

const CategoryHeader = () => {
    return (
        <div className='container'>
            <div className='row text-center'>
                <div className='col-sm-12 col-md-4'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <img src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQwnfCcJmxDv9rhwIHZwqP3a-uGwz9Xv8F0j-qQrI3xiVLkrxVuZW-mJoWLMlhpWhFkc9M/256fx256f" alt="..." />

                        </div>
                        <div className='col-sm-12'>
                            <div class="btn-group mb-5" role="group" aria-label="Basic mixed styles example">
                                <button type="button" class="border border-1 btn btn-outline-secondary text-dark">Price on Steam</button>
                                <button type="button" class="border border- btn btn-outline-secondary text-dark">Market Details</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-8 align-self-center mb-5'>
                    <p class="fw-bold text-dark" style={{ fontSize: "36px" }}>Dreams &amp; Nightmares Case</p>
                    <p class="fw text-dark" style={{ fontSize: "20px", fontWeight: 500 }}>Dreams &amp; Nightmares Collection Skins</p>
                </div>
            </div>

        </div>
    )
}

export default CategoryHeader