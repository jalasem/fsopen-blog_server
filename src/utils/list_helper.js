export const dummy = (blogs) => 1

export const totalLikes = (blogs) => {
  if (!blogs || !(Array.isArray(blogs)) || !blogs.length) return 0

  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

export const favoriteBlog = (blogs) => {
  const maxLikes = Math.max(...blogs.map(blog => blog.likes))

  return blogs.find(blog => blog.likes === maxLikes)
}

export const mostBlogs = (blogs) => {
  let authors = []
  let blogCounts = []

  blogs.forEach(blog => {
    const authorIndex = authors.findIndex(author => author === blog.author)

    if (authorIndex === -1) {
      authors = authors.concat(blog.author)
      blogCounts = blogCounts.concat(1)
    } else {
      blogCounts[authorIndex] += 1
    }
  })
  const maxBlogCounts = Math.max(...blogCounts)
  const maxIndex = blogCounts.findIndex(count => count === maxBlogCounts)

  return {
    author: authors[maxIndex],
    blogs: maxBlogCounts
  }
}

export const mostLikes = (blogs) => {
  let authors = []
  let likeCounts = []

  blogs.forEach(blog => {
    const authorIndex = authors.findIndex(author => author === blog.author)

    if (authorIndex === -1) {
      authors = authors.concat(blog.author)
      likeCounts = likeCounts.concat(blog.likes)
    } else {
      likeCounts[authorIndex] += blog.likes
    }
  })

  const maxLikeCount = Math.max(...likeCounts)
  const maxIndex = likeCounts.findIndex(count => count === maxLikeCount)

  return {
    author: authors[maxIndex],
    likes: maxLikeCount
  }
}
