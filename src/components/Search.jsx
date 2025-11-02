import React from 'react'

const Search = ({searchTerm, setSearchTearm}) => {
    return (
        <div className="search">
            <div>
                <img src="./search.svg" alt="Search" />
                <input
                    type="search"
                    value={searchTerm}
                    placeholder="Search through thousands of movies"
                    onChange={(event) => setSearchTearm(event.target.value)}/>
            </div>
        </div>

    )
}
export default Search
