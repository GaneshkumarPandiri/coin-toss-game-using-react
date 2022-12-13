import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {tossImage: true, headsCount: 0, tailsCount: 0}

  onCoinToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(item => ({totalCount: item.totalCount + 1}))
    if (tossResult === 0) {
      this.setState(item => ({
        tossImage: true,
        headsCount: item.headsCount + 1,
      }))
    } else {
      this.setState(item => ({
        tossImage: false,
        tailsCount: item.tailsCount + 1,
      }))
    }
  }

  render() {
    const {tossImage, headsCount, tailsCount} = this.state

    const imageUrl = tossImage
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="main-bg-container">
        <div className="card-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="img-style" />
          <button type="button" className="btn-style" onClick={this.onCoinToss}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="results">Total: {headsCount + tailsCount}</p>
            <p className="results">Heads: {headsCount}</p>
            <p className="results">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
