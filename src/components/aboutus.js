import React from 'react';

export default function AboutUs() {
  return (
    <div className='container'>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              About App
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body bg-light text-dark">
              <h4><strong>Text Trove: Your Text Analysis Companion.</strong></h4>
              <p>Text Trove is a versatile text analysis companion designed to enhance your writing experience. With features like real-time case transformation, including uppercase, lowercase, and camel case, it streamlines text formatting. The app offers spell checking capabilities and introduces a spell-check feature to help identify potential errors. Dark mode provides a personalized visual experience, and a dynamic spell-check feature helps users catch errors. Text Trove's intuitive design and functionality make it an essential tool for efficient text manipulation and analysis. Whether you're writing code or crafting prose, Text Trove is your go-to solution for clear and error-free </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Future Additions
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body bg-light text-dark">
              <h4><strong>Future Scope for Text Trove:</strong></h4>
              <ul>
                <li>Implement advanced language analysis for sentiment and tone.</li>
                <li>Introduce a feature to extract and highlight key phrases.</li>
                <li>Expand functionality to generate concise summaries of longer texts.</li>
                <li>Facilitate collaboration with real-time editing and commenting features.</li>
                <li>Incorporate AI-driven suggestions for grammar and style improvements.</li>
                <li>Enable users to export analyzed text in various formats for increased versatility.</li>
              </ul>
            </div>
          </div>
        </div>
        
        
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
             About Developer
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body bg-light text-dark">
              <h4><strong>Developed by Pranav Divekar</strong></h4>
              <ul>
                <li>You are most welcome to make changes and add more functionalities to our app. App has been developed using React-js and bootstrap components</li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
