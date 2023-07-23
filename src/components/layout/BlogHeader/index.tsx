import React from 'react'
import { HeaderIntro, SubText, SubTitle } from '../../common'
import CategoriesTags from '../../CategoriesTags/categoriesTags'

function BlogHeader() {
  return ( 
    <>
      <SubTitle>
        Articles
      </SubTitle>
      <HeaderIntro>
          <SubText>
            Posts that prioritize providing information through straightforward explanations.
            <br/>
            Simple can be harder than complex.
          </SubText>
        <CategoriesTags /> 
      </HeaderIntro>
    </>
  )
}

export default BlogHeader
