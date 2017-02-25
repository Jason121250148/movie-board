import React from 'react';

export default function HomeRowContent(props) {
  const images = props.movies.map(movie => {
    const imageStyle = {
      backgroundImage: `url(${movie.images.medium})`
    };
    return (
      <div
        className="movie-cover"
        key={movie.id}
        style={imageStyle}
        alt="movie cover"
      />
    )
  });
  return (
    <div className="mb-home-row-content">
      <div className="movie-covers">
        {images}
      </div>
    </div>
  );
}

HomeRowContent.propTypes = {
  moview: React.PropTypes.array.isRequired
};