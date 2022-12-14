import React from "react";

const SearchBar = () => {
    return (
        <div className="d-flex align-items-center mt-4">
            <div className="input-group input-group-outline">
                <label className="form-label">Buscar...</label>
                <input type="text" className="form-control" />
            </div>
        </div>
    )
}

export default SearchBar;