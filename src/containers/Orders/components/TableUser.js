import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../api/firebaseScript";
import { Link } from "react-router-dom";
import SearchBar from "../../../components/Shared/SearchBar";
import { format } from "date-fns"; // Import date-fns for date formatting
import CryptoJS from 'crypto-js'; // Import CryptoJS

const TableUser = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("Latest to Oldest");

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(firestore, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const usersData = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        dateAdded: doc.data().dateAdded.toDate() // Convert Firestore timestamp to Date object
      }));
      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const filterUsers = (users, query) => {
    if (!query) {
      return users;
    }
    return users.filter((user) =>
      user.firstName?.toLowerCase()?.includes(query.toLowerCase()) || 
      user.addedBy?.toLowerCase()?.includes(query.toLowerCase()) || 
      user.emailAddress?.toLowerCase()?.includes(query.toLowerCase()) || 
      user.lastName?.toLowerCase()?.includes(query.toLowerCase()) || 
      user.phoneNumber?.toLowerCase()?.includes(query.toLowerCase()) 
    );
  };

  const sortUsers = (users, order) => {
    const sortedUsers = [...users];
    switch (order) {
      case "Latest to Oldest":
        return sortedUsers.sort((a, b) => b.dateAdded - a.dateAdded);
      case "Oldest to Latest":
        return sortedUsers.sort((a, b) => a.dateAdded - b.dateAdded);
      case "A to Z":
        return sortedUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
      case "Z to A":
        return sortedUsers.sort((a, b) => b.firstName.localeCompare(a.firstName));
      default:
        return sortedUsers;
    }
  };

  const filteredUsers = filterUsers(users, searchQuery);
  const sortedUsers = sortUsers(filteredUsers, sortOrder);

  const handleEditClick = (user, password) => {
    // console.log("4567password", "edit - "+CryptoJS.AES.encrypt("123456789", '<JHGFytguhkjhjgvcfrhtfjgh').toString())
      
    localStorage.setItem(`password_${user}`, password);
  };

  return (
    <div className="table-responsive">
      {/* Table header */}
      <div className="table-header">
        <div className="d-flex no-wrap px-1">
          <div className="dropdown">
            <button
              className="button text-body-reg btn-sort dropdown-toggle"
              type="button"
              id="btnSort"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort by
            </button>
            <ul className="dropdown-menu" aria-labelledby="btnSort">
              <li>
                <a className="dropdown-item" href="#" onClick={() => handleSort("Latest to Oldest")}>
                  Latest to Oldest
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={() => handleSort("Oldest to Latest")}>
                  Oldest to Latest
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={() => handleSort("A to Z")}>
                  A to Z
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={() => handleSort("Z to A")}>
                  Z to A
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mr-3">
          <SearchBar onSearch={handleSearch} /> {/* Pass handleSearch to SearchBar */}
        </div>
      </div>

      {/* Table Content */}
      <table className="my-table mt-2">
        <thead className="table-head">
          <tr>
            <th className="col-lg-1">First Name</th>
            <th className="col-lg-1">Last Name</th>
            <th className="col-lg-1">Contact No.</th>
            <th className="col-lg-3">Email Address</th>
            <th className="col-lg-3">Added By - On</th>
            <th className="col-lg-1"></th>
          </tr>
        </thead>
        <tbody className="table-body">
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.emailAddress}</td>
              <td>{user.addedBy} - {format(user.dateAdded, "MM-dd-yyyy")}</td> {/* Format date */}
              <td>
                <Link to={`/admin/users/edit-user/${user.id}`} className="text-decoration-none">
                  <button 
                    className="small-btn rounded-pill" 
                    onClick={() => handleEditClick(user.id, user.password)}
                  >
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUser;
