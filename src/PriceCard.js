export default function PriceCard(props){
    return (
    <div className="col-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
            <h6 className="card-price text-center">${props.data.price}<span className="period">/Month</span></h6>
            <hr/>
            <ul className="fa-ul">
              {
                props.data.features.map(obj => {
                  if(obj.enable){
                  return <li><span className="fa-li"><i className="fas fa-check"></i></span>{obj.isstrong ? <strong>{obj.name}</strong> : obj.name}</li>
                  }
                  else{
                  return <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{obj.name}</li>
                  }

                })
              }
              
            
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    )

}