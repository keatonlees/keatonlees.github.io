import "./MultiDisplay.sass";

function MultiDisplay({ variant = 1, images }) {
  if (variant === 2) {
    return (
      <div className="display-container-2">
        <img
          src={images[0]}
          alt="project"
          className="shadow display-image display-image-2-1"
          loading="lazy"
        />
        <img
          src={images[1]}
          alt="project"
          className="shadow display-image display-image-2-2"
          loading="lazy"
        />
      </div>
    );
  }
  if (variant === 3) {
    return (
      <div className="display-container-3">
        <img
          src={images[0]}
          alt="project"
          className="shadow display-image display-image-3-1"
          loading="lazy"
        />
        <img
          src={images[1]}
          alt="project"
          className="shadow display-image display-image-3-2"
          loading="lazy"
        />
        <img
          src={images[2]}
          alt="project"
          className="shadow display-image display-image-3-3"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="display-container-1">
      <img
        src={images[0]}
        alt="project"
        className="shadow display-image display-image-1"
        loading="lazy"
      />
    </div>
  );
}

export default MultiDisplay;
