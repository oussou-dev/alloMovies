import React, { Component } from "react"

class MovieElement extends Component {
    render() {
        return(
            <div className="w-25 p-2">
                <div className="card">
                    <img alt="film" src="https://is1-ssl.mzstatic.com/image/thumb/Video71/v4/85/1c/82/851c823f-271e-877f-21ef-766b29f3a3a6/mzm.gjakfclu.lsr/268x0w.png" className="card-img-top"/>
                    <div classNAme="card-body">
                        <h5 className="card-title"> GLADIATOR</h5>
                        <p className="card-text"> Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                        ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieElement