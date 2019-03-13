import React, { Component } from "react"
import Style from './MovieElement.module.scss'

class MovieElement extends Component {

    mouseEnter = () => {
        this.props.updateSelectedMovie(this.props.movie.title)
    }

    render() {
        return (
                <div onMouseEnter = {this.mouseEnter} className= { "bg-light  d-flex flex-row " + Style.container }>
                    <img width="150" height="200" alt="film" src={this.props.movie.img}/>
                    <div className="flex-fill d-flex flex-column p-3">
                        <h5> {this.props.movie.title} </h5>
                        <hr className="w-100"/>
                        <p> {this.props.movie.details} </p>
                    </div>
                </div>
        )
    }
}

export default MovieElement