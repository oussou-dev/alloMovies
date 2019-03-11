import React, { Component } from "react"

class MovieElement extends Component {
    render() {
        return(
            <div className="w-50 p-2">
                <div className="border d-flex">
                    <img width="150" height="200" alt="film" src="https://is1-ssl.mzstatic.com/image/thumb/Video71/v4/85/1c/82/851c823f-271e-877f-21ef-766b29f3a3a6/mzm.gjakfclu.lsr/268x0w.png"/>
                    <div className="flex-fill d-flex flex-column p-3">
                        <h5> Titre</h5>
                        <hr className="w-100"/>
                        <p> Sed ut perspiciatis unde omnis iste natus error sit
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