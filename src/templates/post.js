import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledPostContainer = styled.main`
  max-width: 1000px;
`;
const StyledPostHeader = styled.header`
  margin-bottom: 50px;
  .tag {
    margin-right: 10px;
  }
`;
const StyledPostContent = styled.div`
  margin-bottom: 100px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2em 0 1em;
  }

  p {
    margin: 1em 0;
    line-height: 1.5;
    color: var(--light-slate);
  }

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  code {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
    border-radius: var(--border-radius);
    font-size: var(--fz-sm);
    padding: 0.2em 0.4em;
  }

  pre code {
    background-color: transparent;
    padding: 0;
  }
`;
const StyledPostNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 100px;
  padding-top: 30px;
  border-top: 1px solid var(--lightest-navy);

  a {
    display: flex;
    flex-direction: column;
    max-width: 48%;

    &.next {
      margin-left: auto;
      text-align: right;
    }

    .label {
      color: var(--green);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
    }

    .title {
      color: var(--lightest-slate);
      font-size: var(--fz-lg);
    }

    &:hover,
    &:focus-visible {
      .title {
        color: var(--green);
      }
    }
  }
`;

const PostTemplate = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { previous, next } = data;
  const { title, date, tags } = frontmatter;

  return (
    <Layout location={location}>
      <Helmet title={title} />

      <StyledPostContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/blog">All posts</Link>
        </span>

        <StyledPostHeader>
          <h1 className="medium-heading">{title}</h1>
          <p className="subtitle">
            <time>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>&nbsp;&mdash;&nbsp;</span>
            {tags &&
              tags.length > 0 &&
              tags.map((tag, i) => (
                <Link key={i} to={`/blog/tags/${kebabCase(tag)}/`} className="tag">
                  #{tag}
                </Link>
              ))}
          </p>
        </StyledPostHeader>

        <StyledPostContent dangerouslySetInnerHTML={{ __html: html }} />

        {(previous || next) && (
          <StyledPostNav aria-label="Blog navigation">
            {previous && (
              <Link to={previous.frontmatter.slug} rel="prev">
                <span className="label">&larr; Previous</span>
                <span className="title">{previous.frontmatter.title}</span>
              </Link>
            )}

            {next && (
              <Link to={next.frontmatter.slug} rel="next" className="next">
                <span className="label">Next &rarr;</span>
                <span className="title">{next.frontmatter.title}</span>
              </Link>
            )}
          </StyledPostNav>
        )}
      </StyledPostContainer>
    </Layout>
  );
};

export default PostTemplate;

PostTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query($path: String!, $previousPostId: String, $nextPostId: String) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        description
        date
        slug
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      frontmatter {
        title
        slug
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      frontmatter {
        title
        slug
      }
    }
  }
`;
