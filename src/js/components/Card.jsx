import react from "react";

const Card = ({ productImage, productName, precio }) => {

  return (
    <div className="col-sm-12 col-md-6 col-lg-3">
      <div className="card-main ">
        <div className="card" >
          <img className="card-img-top" src={productImage} alt="aqui va una imagen" />
          <div className="card-body">
            <h5 className="card-title">{productName}</h5>
            <p className="card-text"> {precio}</p>
          </div>
          <div className="card-footer bg-light">
            <a href="#" className="btn btn-primary">ver más</a>
          </div>
        </div>

      </div>

    </div>
  )



};

export default Card;