interface Article {
  id: number,
  headline: string,
  content: string,
  updated_at: string,
  image: {
    url: string,
    width: number,
    height: number
  },
  member: number,
}

export default Article;
