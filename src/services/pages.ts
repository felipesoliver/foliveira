import axios from "axios"

export const getPageData = async (slug: string) => {
  const response = await axios.get(`${process.env.BACKEND_API_URL}pages?where[slug][equals]=${slug}`)
  .then(res => res.data)
  .catch(error => console.error("Error fetching page data:", error))


  return response
}
