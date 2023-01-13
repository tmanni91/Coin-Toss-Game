import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {tossImage: true, headsCount: 0, tailsCount: 0}

  onTossCoin = () => {
    const toss = Math.floor(Math.random() * 2)

    if (toss === 0) {
      this.setState(prevState => ({
        tossImage: true,
        headsCount: prevState.headsCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        tossImage: false,
        tailsCount: prevState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {tossImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    const image = tossImage
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="cointoss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={image} alt="Toss Result" className="toss-img" />
          <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
