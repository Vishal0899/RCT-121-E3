import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AppContext } from "../Context/appContext";

export const Posts = () => {
  const [state, dispatch] = useContext(AppContext);
  console.log(state);
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  useEffect(() => {
    setSearchParams({
      page,
    });
    axios({
      url: "https://jsonplaceholder.typicode.com/posts",
      // url: "https://reqres.in/api/users",
      method: "GET",
      params: {
        page
      },
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      {state.token}
      <div>
        {data.map((item) => (
          <div
            key={item.id}
            style={{width: "200px", margin:"auto", marginBottom:"10px", marginTop:"10px" }}
          >
            <div>userId:{item.UserID}</div>
            <div>Id:{item.id}</div>
            <div>Title:{item.title}</div>
            <div>Body:{item.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
