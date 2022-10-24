import {Component} from 'react'
import './index.css'

class HistoryItem extends Component {
  deleteHistoryI = () => {
    const {deleteHistoryHC, eachItem} = this.props
    deleteHistoryHC(eachItem.id)
  }

  onDeleteOver = () => {
    const {eachItem} = this.props
    const {id} = eachItem
    const ID = '#EachItem'.concat(String(id))
    console.log(ID)
    const obj = document.querySelector(ID)
    obj.classList.add('text-danger')
  }

  onDeleteOut = () => {
    const {eachItem} = this.props
    const {id} = eachItem
    const ID = '#EachItem'.concat(String(id))
    const obj = document.querySelector(ID)
    obj.classList.remove('text-danger')
  }

  render() {
    const {eachItem} = this.props
    const {timeAccessed, logoUrl, title, domainUrl, id} = eachItem
    const ID = 'EachItem'.concat(String(id))
    console.log(ID)
    return (
      <li className="eachItemCon" id={ID}>
        <p className="time">{timeAccessed}</p>
        <div className="historyDetails ">
          <img src={logoUrl} className="icon" alt="domain logo" />
          <p className="info">{title}</p>
          <p className="domain text-truncate">{domainUrl}</p>
        </div>
        <button
          className="deleteIcon"
          data-toggle="tooltip"
          data-placement="top"
          title="DELETE"
          type="button"
          onMouseEnter={this.onDeleteOver}
          onMouseLeave={this.onDeleteOut}
          id={ID}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            className=""
            alt="delete"
            onClick={this.deleteHistoryI}
          />
        </button>
      </li>
    )
  }
}

export default HistoryItem
