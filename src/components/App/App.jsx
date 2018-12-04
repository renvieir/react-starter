import React, { Component } from 'react'
import style from './App.css' // eslint-disable-line

export default class App extends Component {
  render () {
    return (
      <div styleName='style.App'>
        <header styleName='style.App-header'>
          <h1 styleName='style.App-title'>Welcome to React</h1>
        </header>
        <p styleName='style.App-intro'>
          To get started, edit <code>src/components/App.jsx</code> and save to reload.
        </p>
      </div>
    )
  }
}
