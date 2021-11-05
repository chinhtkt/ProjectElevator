import React from 'react'

function Log({data, searchTerm, filterTerm, loading}) {

    function handleTypeTag(data) {
        if(data === "Bình thường") {
            return <span class="tag is-success">{data}</span>
        } else if(data === "Nguy hiểm") {
            return <span class="tag is-danger">{data}</span>
        } else if(data === "Cảnh Báo") {
            return <span class="tag is-warning">{data}</span>
        } else if(data === "Lỗi") {
            return  <span class="tag is-warning is-light">{data}</span>
        }
        return data

    }
    return (
        <div class="mt-2">
           <span class="icon-text is-flex is-justify-content-center">
        <span class="icon">
        <i class="far fa-comments"></i>
        </span>
        <span><h2 class="is-size-4 has-text-weight-normal has-text-dark mb-2 has-text-centered is-uppercase is-family-monospace	mb-3">
        Message Log
      </h2></span>
      </span>
            <div class="is-flex is-justify-content-center">
            <table class="table is-hoverable">
            <thead>
                <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TYPE</th>
                <th>DESCRIPTION</th>
                </tr>
            </thead>
            <tbody>
            {data.filter((val) => {
                return val.logs[0].type.toLowerCase().includes(searchTerm.toLowerCase()) 
            })
            .map((val) => {
                return (
                    <tr key={val.logs[0].id}>
                        <td><p class="heading tag is-light">{val.logs[0].id}</p></td>
                        <td><p class="heading tag is-primary is-light">{val.logs[0].date}</p></td>
                        <td>{handleTypeTag(val.logs[0].type)}</td>
                        <td><p class="heading tag is-info">{val.logs[0].desc}</p></td>
                    </tr>
                );
            })}
            </tbody>
            </table>
            </div>
        </div>
    )
}

export default Log
