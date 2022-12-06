import React from "react";

const SearchBar = () => {
    return (
        <div class="px-3 d-flex align-items-center mt-4">
            <div class="input-group input-group-outline">
                <label class="form-label">Buscar...</label>
                <input type="text" class="form-control" />
            </div>
        </div>
    )
}

export default SearchBar;