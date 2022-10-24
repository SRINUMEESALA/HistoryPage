import {Component} from 'react'
import './index.css'
import HistoryItem from '../History_Item_Component/index'

class History extends Component {
  state = {searchRes: [], count: 0}

  deleteHistoryHC = id => {
    const {deleteHistoryA} = this.props
    deleteHistoryA(id)
  }

  inputChanged = event => {
    const {UsersList} = this.props
    const inp = event.target.value.toLowerCase()
    const filteredList = UsersList.filter(obj =>
      obj.title.toLowerCase().includes(inp),
    )
    console.log('inputChanged fun triggered', filteredList)
    this.setState({searchRes: filteredList})
  }

  focusOn = event => {
    const obj = document.querySelector('.searchLogoCon')
    const obj2 = document.querySelector('.inputEl')
    obj2.classList.add('styleSearch')
    obj.classList.add('styleSearch')
  }

  focusOff = event => {
    const obj = document.querySelector('.searchLogoCon')
    const obj2 = document.querySelector('.inputEl')
    obj2.classList.remove('styleSearch')
    obj.classList.remove('styleSearch')
  }

  render() {
    const {count, searchRes} = this.state
    const {UsersList} = this.props
    console.log('in HC', UsersList, count, searchRes)
    if (searchRes.length > UsersList.length) {
      this.setState({searchRes: UsersList})
    }
    if (count === 0) {
      this.setState({count: 1, searchRes: UsersList})
    }
    return (
      <div className="parentCon">
        <div className="topSearchBarCon">
          <div className="logoImgCon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="sizeHistoryLogo"
            />
          </div>
          <div className="searchWithIconCon">
            <div className="searchLogoCon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search logo"
                className="searchIcon"
              />
            </div>
            <input
              type="search"
              className="inputEl"
              placeholder="Search History"
              onChange={this.inputChanged}
              onFocus={this.focusOn}
              onBlur={this.focusOff}
            />
          </div>
        </div>
        <div className="bottomHistoryCon mt-3">
          {searchRes.length !== 0 ? (
            <ul className="BottomCard pt-3 overflow-auto">
              {searchRes.map(eachObj => (
                <HistoryItem
                  eachItem={eachObj}
                  key={eachObj.id}
                  deleteHistoryHC={this.deleteHistoryHC}
                />
              ))}
            </ul>
          ) : (
            <div className="NoHistoryCon BottomCard pt-3">
              <p>There is no history to show</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default History
