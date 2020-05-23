import React from 'react';

const SchoolHeader = (props) => {
  return (
    <>
      <h2>{props.currentSchool}</h2>
      <button disabled>See Full Report</button>
      <button disabled>See Full Report as PDF</button>
      <button onClick={props.showGradesOnly}>See Grades as PDF</button>
      <button>Download Full Report as CSV</button>
    </>
  )
}

export default SchoolHeader;