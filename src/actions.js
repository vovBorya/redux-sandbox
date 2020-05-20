//action creator
const inc = () => ({ type: 'INC' })
const dec = () => ({ type: 'DEC' })
const rnd = (payload) => ({ type: 'INC_RANDOM', payload })

export {
  inc,
  dec,
  rnd
}
