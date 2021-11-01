import PropTypes from 'prop-types'
function ProjectList(props) {
    return(
        <div>
            {props.projects.map((project) =>
                <img key = {project.id} className='project-item' src = {project.img} />
            )}
        </div>
    )
}

export default ProjectList

ProjectList.propTypes = {
    projects:PropTypes.array.isRequired,
};