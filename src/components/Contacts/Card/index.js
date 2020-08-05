import PropTypes from "prop-types"
import React from "react"

export const Card = ({ person: { name, email, picture } }) => (
  <figure className="card">
    <img src={picture.thumbnail} alt="" />
    <figcaption>
      <h2>
        {name.first} {name.last}
      </h2>
      <a href={`mailto:${email}`}>{email}</a>
    </figcaption>
  </figure>
)

Card.propTypes = { person: PropTypes.object.isRequired }
