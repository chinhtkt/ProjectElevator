import React from "react";
function Content({data}) {
  return (
    <div class="columns mb-5">
    {/* {data.map((val) => {
        return (
        <div key={val.id} class="column is-one-quarter has-text-centered">
        <div class="box">
          <div>
          <i class="fas fa-chart-line"></i>
            <p class="heading">{val}</p>
            <p class="title">{val}</p>
          </div>
        </div>
      </div>
        )
    })} */}
    </div>
  );
}

export default Content;
