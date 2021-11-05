import React from 'react'

function InputTags({tags, addTags, removeTag, setSearchTerm}) {
    return (
        <div>
            
              <div className='tags-input'>
                <ul id='tags-custom'>
                  {tags.map((tag, index) => {
                    return (
                      <li class='tag-custom' key={index}>
                        <span>{tag}</span>
                        <i
                          class='fas fa-minus-circle custom-icon'
                          onClick={() => removeTag(index)}
                        ></i>
                      </li>
                    );
                  })}
                </ul>
                <input
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                  placeholder='Filter'
                  type='text'
                  onKeyUp={(e) => (e.key === 'Enter' ? addTags(e) : null)}
                />
            </div>
        </div>
    )
}

export default InputTags
