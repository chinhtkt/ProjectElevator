import React from 'react'

function Log({data, searchTerm}) {
    return (
        <div class="mt-2">
            <h2 class="is-size-4 has-text-weight-normal	has-text-dark mb-2 has-text-centered">Message</h2>
            <div class="is-flex is-justify-content-center">
            <table class="table is-bordered is-hoverable  mt-5">
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                </tr>
            </thead>
            <tbody>
            {data.filter((val) => {
                return val.name.toLowerCase().includes(searchTerm.toLowerCase()) 
            }).map((val) => {
                return (
                    <tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
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
