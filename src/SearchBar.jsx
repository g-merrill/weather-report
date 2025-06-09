import './SearchBar.css'

const SearchBar = ({handleSearch}) => {
  return (
    <div className='searchbar'>
      <input type='text' />
      <div onClick={handleSearch} className='searchbar-submit'>Search</div>
    </div>
  )
}

export default SearchBar