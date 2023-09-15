import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function TicketCard(props) {
  const { filteredData, passengerCount } = props;
  const navigate =useNavigate();

  return (
    <>
      {filteredData.map((data, i) => {
         const flightPrice=data.price*passengerCount;

        return (
          <div className="card mb-3" id="ticket_card" key={i}>
            <div className="card-body">
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    width: '60%',
                    fontSize: '13px',
                    display: 'flex',
                    lineHeight: '1.5rem',
                  }}
                >
                  <div>
                    <div
                      style={{
                        marginBottom: '6px',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    > 
                      <span>
                        <b>₹ {flightPrice}</b>
                      </span>
                      <span style={{ fontSize: '11px' }}>
                        <b>{passengerCount} P</b>
                      </span>
                    </div>
                    <div>
                      <b>
                        {data.from.short} {'>>'} {data.to.short}
                      </b>
                    </div>
                    <div>{data.code}</div>
                    <div>Depart: {data.departTime}</div>
                    <div>Arrive: {data.arrivalTime}</div>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '40%',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ height: '100px', width: '140px' }}>
                    <img
                      src={data.flightImg}
                      alt="flight_img"
                      style={{ height: '100%', width: '100%' }}
                    />
                  </div>
                  <div>
              
                
                    <button type="button" className="btn btn-sm btn-info" onClick={()=>navigate("/details", { state: { flightPrice} })}>
                      <b>Book</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TicketCard;
