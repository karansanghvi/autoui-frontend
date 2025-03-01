import React from 'react'

function Features() {
  return (
    <>
    <div className='features-section px-20 pt-20'>
      <h1>Product Features</h1>
    </div>
    <div className='px-20 pt-10'>
        <div className='features-card'>
            <h1 className='card-title'>Drag And Drop UI Builder</h1>
            <p className='card-description'>No more manual coding! Our intuitive drag-and-drop builder lets you visually design Android and web screens in minutes. Simply pick UI components, arrange them as needed, and customize their properties—all without writing a single line of code.</p>
        </div>
        
        <div className='features-card'>
            <h1 className='card-title'>Instant Code Generation</h1>
            <p className='card-description'>Once your UI design is ready, our system instantly converts it into clean, production-ready code. Choose between Kotlin + XML for Android or ReactJS + HTML & CSS for web. Whether you're a developer or a designer, this feature saves time and eliminates repetitive coding tasks.</p>
        </div>

        <div className='features-card'>
            <h1 className='card-title'>Export And Download Code</h1>
            <p className='card-description'>With just one click, export your generated code and download it in your preferred format. Seamlessly integrate it into your existing project and focus on building amazing applications rather than spending hours on UI development.</p>
        </div>
    </div>
    </>
  )
}

export default Features
