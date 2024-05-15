import ProgressTracker from "../Shared/ProgressTracker";
const TrackOrderModal = ({ orderData }) => {

  const currentStage = orderData?.status;

  const generateTableRows = () => {
    // Define data here or fetch gikan API
    const data = [
      {
        items:  orderData?.item1name,
        description: orderData?.item1qty,
        status: orderData?.item1price,
      },
      {
         items:  orderData?.item2name,
        description: orderData?.item2qty,
        status: orderData?.item2price,
      },
      {
         items:  orderData?.item3name,
        description: orderData?.item3qty,
        status: orderData?.item3price,
      },
      {
     items:  orderData?.item4name,
        description: orderData?.item4qty,
        status: orderData?.item4price,
      },
      {
        items:  orderData?.item5name,
        description: orderData?.item5qty,
        status: orderData?.item5price,
      },
    ];

    return data.map((item, index) => (
      <tr key={index}>
        <td className="starting-cell">{item.items}</td>
        <td>{item.description} <span className="subheading"> pc/s</span></td> 
        <td className="ending-cell">₱ {item.status}.00</td>
      </tr>
    ));
  };
  return (
    <>
      <div
        className="modal fade"
        id="trackOrderModal"
        tabindex="-1"
        aria-labelledby="trackOrderModalLabel"
        aria-hidden="true"
      >
        {/* modal-dialog-scrollable removed for the meantime */}
        <div className="modal-dialog modal-dialog-centered track-order-modal">
          <div className="modal-content">
            <div className="modal-header">
            <div className="d-flex justify-content-between flex-fill px-4 py-3">
                <div className="pt-1">
                  <h4 className="text-header-reg pb-2">{orderData?.fullName}</h4>
                  <h6 className="text-title-reg text-dark">
                    Contact #: {orderData?.phoneNumber}
                  </h6>
                  <h6 className="text-title-reg text-dark">
                    Email: {orderData?.customerEmail}
                  </h6>
                </div>
                <div>
                  <h1 className="text-large-sb pb-1 text-end">
                    #{orderData?.jobOrderID}
                  </h1>
                  {/* <h6 className="text-title-reg text-dark text-end">
                    Job Order ID
                  </h6> */}
                  <h6 className="text-title-reg text-dark text-end">
                    Ordered on {orderData?.eventDate}
                  </h6>
                  <h6 className="text-title-reg text-dark text-end">
                    Filed on {orderData?.filledupDate}
                  </h6>
                 <h6 className="text-title-reg text-dark text-end">
                    Filed By {orderData?.filledBy}
                  </h6>
                  
                </div>
              </div>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <div className="row progress-track-section">
                <div className="col-auto">Status:</div>
                <div className="col text-success">
                  {orderData?.status}
                </div>
                <div className="subheading">
                 Estimated to finish on {orderData?.dueDate}
                </div>
              </div>
              <div className="m-4">
                <ProgressTracker stage={currentStage} />
              </div>
              <div className="border-bottom"></div>
              {/* TABLE */}
              <div className="">
                <table className="modal-table">
                    <tr className="">
                      <th className="col-lg-7 starting-cell">Items</th>
                      <th className="col-lg-2">Qty</th>
                      <th className="col-lg-2 ending-cell">Price</th>
                    </tr>
                  <tbody>{generateTableRows()}</tbody>
                </table>
                <div className="row d-flex">
                  <div className="col-lg-9 text-end">
                    <p className="heading mb-3">Remaining Balance:</p>
                    <p className="heading">Total Price:</p>
                  </div>
                  <div className="col-lg-3">
                    <p>₱{orderData?.totalprice}.00</p>
                    <p>₱{orderData?.balance}.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrderModal;
