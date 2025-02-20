import React from 'react'

function ProjectsDiv({ data }) {
    return (
        <div className=''>
            <iframe
                srcDoc={data}
                title="output"
                sandbox="allow-forms allow-popups allow-scripts allow-same-origin allow-modals"
                frameBorder="0"
                height="100%"
                width="100%"
            />
        </div>
    )
}

export default ProjectsDiv
