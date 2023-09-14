import { useEffect } from "react";
import { fetchData, addToList } from "../store/actions/listActions";
import { useDispatch, useSelector } from "react-redux";

const Table = () => {
  const dispatch = useDispatch();
  const listObj = useSelector((state) => state?.list);
  let length = Object.keys(listObj).length;

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleKey = (url) => {
    dispatch(addToList(url));
  };

  return (
    <div>
      <h1>Table {length}</h1>
      <div className="table-section">
        <table className="custom-border">
          <thead>
            <tr>
              <th>key</th>
              <th>item</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {listObj
                  ? Object.keys(listObj).map((item) => {
                      return (
                        <div
                          onClick={() => handleKey(listObj[item])}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: "20px",
                            cursor: "pointer",
                          }}
                        >
                          {item}
                        </div>
                      );
                    })
                  : null}
              </td>
              <td>
                {listObj
                  ? Object.keys(listObj).map((item) => {
                      return (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: "20px",
                          }}
                        >
                          {listObj[item]}
                        </div>
                      );
                    })
                  : null}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
