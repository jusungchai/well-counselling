import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function MemberProfile({ match }) {
  const { params: { profileId } } = match;

  const [state, setState] = useState({
    loading: true,
    bio: ""
  })

  useEffect(() => {
    axios.get(`/users/profile?id=${profileId}`)
      .then(res => {
        console.log(res.data[0])
        if (res.data.length > 0) {
          setState({ loading: false, bio: res.data[0].data })
        } else {
          setState({ loading: false, bio: { msg: "No Profile Found" } })
        }
      })
      .catch(error => console.log(error))
      console.log(state)
  }, [])
  
  return state.loading ? null : (
    state.bio.msg ?
      <div>
        <br />
        <br />
        <br />
        <br />
        <h1>{state.bio.msg}</h1>
      </div>
      :
      <div>
        <br />
        <br />
        <br />
        <br />
        <h1>YOLO</h1>
        <h1>{profileId}</h1>
        <p>{state.bio.info}</p>
      </div>
  )
}
