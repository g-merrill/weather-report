import './SearchBar.css'

const SearchBar = ({handleSearch}) => {
  return (
    <div className='searchbar'>
      <input className='searchbar-input' type='text' placeholder='Search for a city'/>
      <div onClick={handleSearch} className='searchbar-submit'>Search</div>
    </div>
  )
}

export default SearchBar