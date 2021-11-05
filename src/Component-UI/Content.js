import React from "react";

function Content({data}) {

  function handleTypeTag(data) {
    if(data === "Lắp Đặt") {
        return <span class="tag is-success">{data}</span>
    } else if(data === "Sửa Chữa") {
        return <span class="tag is-danger">{data}</span>
    } else if(data === "Bảo Dưỡng") {
        return <span class="tag is-warning">{data}</span>
    } else if(data === "Nhắc Lịch") {
        return  <span class="tag is-warning is-light">{data}</span>
    }
    return data

}

  return (
    <div class="columns mb-5">
    {data.map((val) => {
        return (
        <div key={val.id} class="column is-one-quarter has-text-centered">
        <div class="box">
          <div>
          <i class="fas fa-user-cog"></i>
            <p class="heading">{val.address}</p>
            <div class="is-size-6">Status<p>{handleTypeTag(val.maintainances[0].type)}</p></div>
          </div>
        </div>
      </div>
        )
    })}
    </div>
  );
}

export default Content;
