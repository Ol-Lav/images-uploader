import "./Image.css";

export const Image = ({ src, alt }) => {
  return (
    <div className="image__container">
      <img src={src} alt={alt} className="image" />
    </div>
  );
};
