import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router'
import { useGlobalContext } from '../store/global'
import { searchPhotos } from '../utils/data'

const Search = (props) => {

  const { updateImages } = useGlobalContext()

  useEffect(() => {
    // handle search on enter
    const submitOnEnter = (e) => {
			if (e.key === 'Enter') {
				e.preventDefault()
        const s = document.getElementById('searchbar')
        if (s.value) {
          // update location to user's search
          props.history.push(`/?q=${s.value}`)
          searchPhotos(s.value).then(res => {
            updateImages(res.data)
          })
        }
			}
		}
    // add handler
    document.getElementById('searchbar').addEventListener('keypress', submitOnEnter)
    return (() => {
      // remove handler when component will unmount
      document.getElementById('searchbar').removeEventListener('keypress', submitOnEnter)
    })
  }, [])

  // perform image search, and update global state with the results
  const handleSearch = () => {
    const s = document.getElementById('searchbar')
    if (s.value) {
      // remove query param when user modifies search
      if (props.history.location.search) {
        props.history.replace('/')
      }
      searchPhotos(s.value).then(res => {
        updateImages(res.data)
      })
    }
  }

  return (
    <div className="search">
      <FontAwesomeIcon className="search__icon" icon={faSearch} onClick={handleSearch} />
      <input id="searchbar" className="search__input" type="text" onChange={handleSearch}></input>
    </div>
  )
}

export default withRouter(Search)
