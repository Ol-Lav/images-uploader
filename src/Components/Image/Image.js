import "./Image.css";

export const Image = ({ src, alt }) => {

  return (
    <div className="image">
      <img src={src} alt={alt} />
    </div>
  );
};
