import { render } from '@testing-library/react'
import React, { Component } from 'react'

class App extends Component {
  componentDidMount() {
    fetch('https://api.shrtco.de/v2/')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }
}

export default App
