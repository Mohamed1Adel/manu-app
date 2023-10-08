import React from "react";
import { Col, Row } from "react-bootstrap";
import { Roll } from "react-reveal";
function Category({ filterByCategory, allCategory }) {
  const onFilter = (cat) => {
    filterByCategory(cat);
  };

  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <Roll>
          {allCategory.length >= 1 ? (
            allCategory.map((cat) => {
              return (
                <div>
                  <button
                    onClick={() => onFilter(cat)}
                    style={{ border: "1px solid #b45b35" }}
                    className="btn mx-2"
                  >
                    {cat}
                  </button>
                </div>
              );
            })
          ) : (
            <h4>لا يوجد تصنيفات</h4>
          )}
        </Roll>
      </Col>
    </Row>
  );
}

export default Category;

{
  /* <div className="">
          <button
            onClick={() => onFilter("الكل")}
            style={{ border: "1px solid #b45b35" }}
            className="btn mx-2"
          >
            الكل
          </button>
          <button
            onClick={() => onFilter("فطار")}
            style={{ border: "1px solid #b45b35" }}
            className="btn mx-2"
          >
            فطار
          </button>
          <button
            onClick={() => onFilter("غداء")}
            style={{ border: "1px solid #b45b35" }}
            className="btn mx-2"
          >
            غداء
          </button>
          <button
            onClick={() => onFilter("عشاء")}
            style={{ border: "1px solid #b45b35" }}
            className="btn mx-2"
          >
            عشاء
          </button>
        </div> */
}
