import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Calendar, Clock } from 'react-feather'

import {Intro, Title, ArticlePost, SmallText, ArticleBody, NaviagtionList, NaviagtionLi } from '../../components/styled/posts'
import {ContainerLayout} from '../../components/common'


const BlogPost = ({data, pageContext, location}) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Intro >
        <ContainerLayout> 
            <div>
              <ArticlePost>
                <header>
                  <Title>
                      {post.frontmatter.title}
                  </Title>
                  <SmallText> 
                    <Calendar className="align-middle text-primary" width="18" height="18" /> 
                    <span className="align-middle"> date published : {post.frontmatter.date} </span>
                  </SmallText>
                  <SmallText> 
                    <Clock className="align-middle text-primary" width="18" height="18" /> 
                    <span className="align-middle"> read time : {post.frontmatter.time} mins </span>
                  </SmallText>
                </header>
                
                <ArticleBody dangerouslySetInnerHTML={{ __html: post.html }} />
              </ArticlePost>

              <nav>
                <NaviagtionList>
                  <NaviagtionLi>
                    {previous && (
                      <Link to={previous.fields.slug} rel="prev">
                        ← {previous.frontmatter.title}
                      </Link>
                    )}
                  </NaviagtionLi>
                  <NaviagtionLi>
                    {next && (
                      <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                      </Link>
                    )}
                  </NaviagtionLi>
                </NaviagtionList>
              </nav>
            </div>
          
        </ContainerLayout>
      </Intro>
    </Layout>
  )
}

export default BlogPost;

export const data = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      rawMarkdownBody
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description,
        time
      }
    }
  }
`