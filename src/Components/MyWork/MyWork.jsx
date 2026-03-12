import React, { useState } from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  const [visibleCount, setVisibleCount] = useState(2); // initially show 2 projects
  const [expanded, setExpanded] = useState(false);

  const toggleShowMore = () => {
    if(expanded){
      setVisibleCount(2);
      setExpanded(false);
    } else {
      setVisibleCount(mywork_data.length);
      setExpanded(true);
    }
  }

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>

      <div className="mywork-container">
        {mywork_data.slice(0, visibleCount).map((work, index) => (
          <div key={index} className="work-item">
            <img src={work.w_img} alt={work.w_name} />

            <h2>{work.w_name}</h2>

            {/* Badge for project type */}
            <span className={`project-type ${work.type}`}>{work.type}</span>

            <p>{work.desc}</p>

            {/* Conditional GitHub link */}
            {work.github_repo ? (
              <a href={work.github_repo} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            ) : (
              <span className="no-link">Project Private / Client Work</span>
            )}
          </div>
        ))}
      </div>

      <div className="mywork-showmore" onClick={toggleShowMore}>
        <p>{expanded ? "See Less" : "See More"}</p>
        <img src={arrow_icon} alt='' />
      </div>
    </div>
  );
}

export default MyWork;