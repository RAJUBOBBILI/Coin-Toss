import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: HEADS_IMG_URL, headCount: 0, tailCount: 0}

  onTossCoin = () => {
    const {tossResultImage, headCount, tailCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadCount = headCount
    let latestTailCount = tailCount

    if (toss === 0) {
      tossImage = HEADS_IMG_URL
      latestHeadCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      latestTailCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headCount: latestHeadCount,
      tailCount: latestTailCount,
    })
  }

  render() {
    const {tossResultImage, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="headig">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            src={tossResultImage}
            alt="Toss Result"
            className="toss-result-img"
          />
          <button className="button" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
