import React from 'react';
import Card from './Card';
import '../style/project.css';


function Project() {
  return (
    <div className="project-main" id="projects">
      <br />
      <h1 className="project-head">Featured Projects</h1>
      <div className="project-1">
      <Card title="React To-do list"  link="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg" 
      content="we will explore the concept of project scope in more detail, providing a comprehensive overview." />
      <Card title="React scroll card" link="https://www.celoxis.com/cassets/img/pmc/project-management.png"                     
      content="we will explore the concept of project scope in more detail, providing a comprehensive overview." />
      <Card title="React login page"  link="https://pmstudycircle.com/wp-content/uploads/2021/06/project.jpg"                    
      content="we will explore the concept of project scope in more detail, providing a comprehensive overview." />
      <Card title="React Music app"   link="https://www.elmhurst.edu/wp-content/uploads/2018/12/5-skills-project-management-degree-elmhurst-college-infographic-thumb.jpg" 
      content="we will explore the concept of project scope in more detail, providing a comprehensive overview." />
    </div>
    <br />
    <div className="project-2">
      <Card title="React Messaging Web" link="https://www.projectmanager.com/wp-content/uploads/2021/10/211014_Blog_Feature_Project_Environment-scaled.jpg" 
      content="we will explore the concept of project scope in more detail, providing a comprehensive overview." />
      <Card title="React calculator"    link="https://www.cio.com/wp-content/uploads/2023/05/project_management-100536263-orig.jpg?quality=50&strip=all" 
      content="we will explore the concept of project scope in more detail, providing a comprehensive overview." />
      <Card title="react Converter"     link="https://clickup.com/blog/wp-content/uploads/2022/09/float-project-management.png" 
      content="we will explore the concept of project scope in more detail, providing a comprehensive overview." />
      <Card title="React sharing App"   link="https://www.proofhub.com/articles/wp-content/uploads/2017/10/Project-Manager-Roles-And-Responsibilities.jpg" 
      content="we will explore the concept of project scope in more detail, providing a comprehensive overview." />
    </div>
    <br />
    <br />
    </div>
  );
}

export default Project;

