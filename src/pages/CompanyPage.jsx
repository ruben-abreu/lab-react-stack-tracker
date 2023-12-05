/* eslint-disable react/prop-types */
import { Link, useParams } from 'react-router-dom';

function CompanyPage({ companies }) {
  let { slug } = useParams();

  const company = companies.find(company => company.slug === slug);

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div key={company.id}>
      <p className='company-header'>{company.name}</p>
      <p>{company.website}</p>
      <div className='company-description'>
        <img src={company.logo} alt={company.name} style={{ width: '100px' }} />
        <p className='text-description'>{company.description}</p>
      </div>
      <Link to={'/'}>
        <button>Back</button>
      </Link>
      <ul className='tech-stack-list'>
        {company.techStack.map(tech => (
          <Link to={`/tech/${tech.slug}?company=${slug}`} key={tech.id}>
            <div className='tech-card-list'>
              <li key={tech.id}>
                <div className='tech-card'>
                  <img src={tech.image} style={{ width: '50px' }} />
                </div>
                {tech.name}
              </li>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default CompanyPage;
