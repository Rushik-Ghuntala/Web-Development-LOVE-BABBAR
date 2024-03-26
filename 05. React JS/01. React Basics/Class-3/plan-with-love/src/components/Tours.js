import Card from "./Card";


function Tours({tours, removeTour}){
    return(
        <div className="tours-container">
            <div className="title">
                <h2>Plan with Love</h2>
            </div>
            <div className="cards">
                {
                    tours.map( (tours) => {
                        return(
                            <Card key={tours.id} {...tours} removeTour = {removeTour} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Tours;