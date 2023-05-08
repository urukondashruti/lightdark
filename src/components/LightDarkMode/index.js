import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    status: true,
  }

  onChange = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  onAdd = () => {
    const {status} = this.state
    return status
      ? {word: 'Light Mode', name1: 'con'}
      : {word: 'Dark Mode', name1: 'con1'}
  }

  render() {
    const {word, name1} = this.onAdd()
    return (
      <div className="back">
        <div className={name1}>
          <h1>Click To Change Mode</h1>
          <button type="button" className="but2" onClick={this.onChange}>
            {word}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
