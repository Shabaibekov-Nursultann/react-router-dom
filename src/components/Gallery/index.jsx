import React from 'react'
import { Link,
  useLocation,
} from "react-router-dom";
import {Thumbnail} from '../Thumbnail'
import {data} from '../../data'
function Gallery() {
  let location = useLocation();
  return (
    <div>
      {data.map(i => (
        <Link
          key={i.id}
          to={{
            pathname: `/img/${i.id}`,
            state: { background: location }
          }}
        >
          <Thumbnail color={i.color} />
          <p>{i.title}</p>
        </Link>
      ))}
    </div>
  );
}
export {Gallery}