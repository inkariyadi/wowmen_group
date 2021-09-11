interface Member {
  id: number,
  name: string,
  title: string,
  photo: {
    url: string,
    width: number,
    height: number,
  },
  description: string,
}

export default Member;
