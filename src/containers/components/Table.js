// Payments table

import SearchBar from "../../components/Shared/SearchBar";

const Table = () => {
  const paginateOrders = (items, page, perPage) => {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return items.slice(startIndex, endIndex);
  };

//   const orders = paginateOrders(allOrders, currentPage, itemsPerPage);

//   const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
//   const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  return (
    <>
    <div className="table-responsive">
       {/* Table Header */}
      <div className="table-header">
        <div className="d-flex no-wrap px-1">
          <div class="dropdown">
            <button
              class="button text-body-reg btn-sort dropdown-toggle"
              type="button"
              id="btnSort"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort by
            </button>
            <ul class="dropdown-menu" aria-labelledby="btnSort">
              <li>
                <a class="dropdown-item" href="#">
                  Latest to Oldest
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Oldest to Latest
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Gateway 
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Method
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mr-3">
          <SearchBar />
        </div>
      </div>
      {/* Table Content*/}
      <table className="my-table mt-2">
        <thead className="table-head">
          <tr>
            <th className="col-lg-1">ID</th>
            <th className="col-lg-1">Paid On</th>
            <th className="col-lg-2">Amount</th>
            <th className="col-lg-1">Order ID</th>
            <th className="col-lg-2">Method</th>
            <th className="col-lg-1">Gateway</th>
            <th className="col-lg-2">Paid By</th>
            <th className="col-lg-3">Filed By - On Date</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {/* {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))} */}
          <tr>l
            <td>000001</td>
            <td>05-11-2024</td>
            <td>₱ 1,000.00</td>
            <td>0038561</td>
            <td>Bank Transfer</td>
            <td>RCBC</td>
            <td>Thomas Shelby</td>
            <td>Cassierre San - 02/23/2024</td>
          </tr>
          <tr>
            <td>000001</td>
            <td>05-88-2024</td>
            <td>₱ 30,000.00</td>
            <td>0032875</td>
            <td>Cash Deposit</td>
            <td>None</td>
            <td>Maria Mercedes</td>
            <td>Leeroy Jenkins - 02/23/2024</td>
          </tr>
          <tr>
            <td>000001</td>
            <td>05-11-2024</td>
            <td>₱ 300,000.00</td>
            <td>0049255</td>
            <td>Check</td>
            <td>BPI</td>
            <td>Nosi Balasi</td>
            <td>Hide On Bush - 02/23/2024</td>
          </tr>
        </tbody>
      </table>
      {/* Modal */}

      {/* Pagination */}
      {/* <div className="text-end">
        <div className="pagination justify-content-end">
          {currentPage > 1 && (
            <a href="#" onClick={prevPage}>
              &laquo; Previous
            </a>
          )}
          {[...Array(Math.ceil(allOrders.length / itemsPerPage))].map(
            (_, index) => (
              <a
                key={index}
                href="#"
                className={currentPage === index + 1 ? "active" : ""}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </a>
            )
          )}
          {currentPage < Math.ceil(allOrders.length / itemsPerPage) && (
            <a href="#" onClick={nextPage}>
              Next &raquo;
            </a>
          )}
        </div>
      </div> */} 
    </div>
      
    </>
  );
};

export default Table;
