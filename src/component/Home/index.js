import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Action from '../../redux/Action';
const Home = () => {
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.reducer.details);

  console.warn("reponseData is-------", responseData)
  useEffect(() => {
    dispatch(Action())
  }, [dispatch]);

  const result = responseData.map((data, index) => {
    return (<tr key={index}>
      <th scope="row">{data.id}</th>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
      <td>{data.country}</td>
    </tr>)
  })

  return (
    <div>
      <h1>mayank</h1>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">PHONE</th>
            <th scope="col">COUNTRY</th>
          </tr>
        </thead>
        <tbody>
          {result}

        </tbody>
      </table>
    </div>
  )
}

export default Home;