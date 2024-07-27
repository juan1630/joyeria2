export const ProductsItem = ({name, url, price}) => {
  return (
    <>
      <div className="box">
        <div className="price"></div>
        <div className="img-box">
          <img src={url} alt="image ring" />
        </div>
        <div className="name mt-3">
          <h5 className="text-center" >{name.toString()}</h5>
          <p className="text-center" > ${price}.00 </p>
        </div>
      </div>
    </>
  );
};
