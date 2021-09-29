import React from 'react';

import rfp from "../../assets/documents/rfp.pdf";

const Documents = () => {
  return (
    <div className="container-sm">
     <h1 className="mt-300 mb-16">
        Document Space
      </h1>

      <div>
        <h2>
          Formal Documents
        </h2>
        <ul>
          <li><a href={rfp} target = "_blank">Request For Proposal</a></li>
          <li>Project Charter</li>
        </ul>
      </div>

      <div>
        <h2>
          Meeting Notes
        </h2>
        <ul>
          <li>T.B.D.</li>
        </ul>
      </div>

      <div>
        <h2>
          Client Meeting
        </h2>
        <ul>
          <li>T.B.D.</li>
        </ul>
      </div>

      <div>
        <h2>
          Gantt Chart
        </h2>
        <ul>
          <li>T.B.D.</li>
        </ul>
      </div>
    </div>
  )
}

export default Documents;