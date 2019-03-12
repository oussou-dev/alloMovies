import React, { Component } from 'react'


class MovieDetails extends Component {
    render() {
        return(
            <div className="w-25 border p-4 d-flex flex-column">
                <h5> {this.props.movie.title} </h5>
                <hr className="w-100"/>
                <div>
                    <img alt="img" className="d-block mx-auto" src={this.props.movie.img} />
                </div>
                <hr className="w-100"/>
                <span className="text-secondary"> {this.props.movie.details} </span>
                <p className="text-secondary"> {this.props.movie.description} </p>
            </div>
        )
    }
}

export default MovieDetails