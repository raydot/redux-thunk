import React, { Component } from "react"
import { connect } from "react-redux"

class App extends Component {
  handleSubmit = e => {
    e.preventDefault()
    const username = this.getUsername.value
    //console.warn("AHA!")
    console.log(username)
  }
  render() {
    console.log(this.props.data)
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form">
          <h2 className="title">GitHub User Finder</h2>
          <input
            type="text"
            placeholder="Enter Github Username"
            required
            ref={input => (this.getUsername = input)}
          />
          <button className="button">Find That Dev!</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  }
}

export default connect(mapStateToProps)(App);