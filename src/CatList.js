// write your CatList component here
import React, { Component } from 'react'

export default class CatList extends Component {

    listCats = () => {
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
      }

    render() {

        // const { url, source_url } = this.props.catPics // uncomment me instead listCats
        return (
            <div>
                {/* <img src={url} alt={source_url} /> */}
                {this.listCats()}
            </div>
        )
    }
}
