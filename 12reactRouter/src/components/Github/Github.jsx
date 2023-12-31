import React, { useState, useEffect } from 'react'

const Github = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/Al-Farhan')
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [])

  return (
    <>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github {data.followers}</div>
        <img src={data.avatar_url} alt="" />
    </>
  )
}

export default Github