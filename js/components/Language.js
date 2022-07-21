// 3 membuat komponen

// import React dibawah
import React from 'react';

// nyatakan class Language dibawah
class Language extends React.Component {
    render(){
        return(
        <div className='language-item'>
        <div className='language-name'>HTML & CSS</div>
        <img className='language-image' src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg' />
      </div>
        );
    }
}

export default Language; // react 4 export deffault 

// 7 props 

import React from 'react';

class Language extends React.Component {
  render() {
    return (
      <div className='language-item'>
        {/* Gantikan code dibawah agar mendisplay prop name */}
        <div className='language-name'>{this.props.name}</div>
        
        
        {/* Gantikan nilai atribut src agar mendisplay prop image */}
        <img 
          className='language-image'
         src = {this.props.image}
        />
        
      </div>
    );
  }
}

export default Language;
