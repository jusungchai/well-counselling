import React from 'react'

export default function MemberProfile({ match }) {
  const { params: { profileId } } = match;
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1>YOLO</h1>
      <h1>{profileId}</h1>

    </div>
  )
}
