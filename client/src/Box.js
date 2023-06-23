import { Link } from "react-router-dom";

const Box = (props) => {

   return (
    
<div className="container"> 
  <div className="row text-center py-5">
    <Link to={`book/${props.name}`}>
  
    <div className="col-md-3 col-sm-6 my-3 my-md-3">
      <form method="post">
        <div className="card shadow">
          <div>
            <img src={props.image} alt="Image" className="img-fluid card-img-top"/>
          </div>
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.name}</h5>
            <h6>
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
            </h6>
            <p className="card-text">
            {props.author} | {props.language} | {props.publisher}
            </p>
            <h5>
              <span className="price">{props.price} Kč</span>
            </h5>
            <button type="submit" className="btn btn-warning my-3" name="add">
              Koupit <i className="fas fa-shopping-cart" />
            </button>
          </div>
        </div>
      </form>
    </div>
    </Link>
  </div>
</div>


   );
};

export default Box;