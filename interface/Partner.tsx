interface Member {
  id: number,
  name: string,
  company_link: string,
  logo: {
    url: string,
    width: number,
    height: number,
  },
}

export default Member;
