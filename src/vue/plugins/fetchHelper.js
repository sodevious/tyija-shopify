// Use just as normal fetch fn but without a need of calling res.json() & with error throwing
export default async (url, options) => {
  const res = await fetch(url, options)
  const { ok, status, statusText } = res

  if (!ok) {
    throw {
      status,
      statusText
    }
  }

  return res.json()
}
