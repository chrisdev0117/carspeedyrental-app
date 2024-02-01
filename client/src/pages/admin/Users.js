import UserTable from "../../components/tables/UserTable";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Pagination } from "flowbite-react";

const UsersContext = React.createContext({
  users: [],
  fetchUsers: () => {},
});

export default function UsersPage() {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchUsers = async (pageIndex) => {
    const response = await fetch(
      `http://localhost:8000/api/v1/auth/all?page=${pageIndex}&size=10`
    );
    const users = await response.json();
    setUserData(users.items);
    setTotal(users.total);
  };
  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const onPageChange = (page) => {
    setCurrentPage(page);
    //window.location.reload();
  };

  return (
    <UsersContext.Provider value={{ userData, fetchUsers }}>
      <div className="h-full bg-blue-100">
        <div className="max-w-5xl py-10 mx-auto">
          <h1 className="pb-5 text-5xl font-semibold">Users</h1>
          <UserTable userData={userData} />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(total / 10)}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </UsersContext.Provider>
  );
}
