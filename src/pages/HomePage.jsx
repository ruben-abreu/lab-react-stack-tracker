/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { Card } from 'antd';

function HomePage({ companies }) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul className='card-list'>
        {companies.map(company => (
          <li key={company.id}>
            <Card>
              <Link to={`/company/${company.slug}`}>
                <p>{company.name}</p>
                <img
                  src={company.logo}
                  alt={company.name}
                  style={{ width: '50px' }}
                />
              </Link>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
