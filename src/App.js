import React, { Component } from 'react'
import { connect } from 'react-redux'
import CatList from './CatList'
import { fetchCats } from './actions/catActions'

export class App extends Component {

  componentDidMount() {
    this.props.fetchCats()
  }
  
  handleLoading = () => {
    console.log(this.props.loading)
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CatList catPics={this.props.catPics} />
    }
  }

  render() {
    // const catList = this.props.loading ? 'Loading...' : this.props.catPics.map(img => <CatList key={img.id} catPics={img} />) // instead handleLoading
    return (
      <div>
        <h1>CatBook</h1>
        {/* uncomment catList insteade handleLoading */}
        {/* {catList} */}
        {this.handleLoading()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

// export default connect(mapStateToProps, {fetchCats})(App)
export default connect(mapStateToProps, mapDispatchToProps)(App)

