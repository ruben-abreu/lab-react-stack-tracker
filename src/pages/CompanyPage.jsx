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
      <p>{company.name}</p>
      <img src={company.logo} alt={company.name} style={{ width: '50px' }} />
      <p>{company.website}</p>
      <p>{company.description}</p>
      <ul>
        {company.techStack.map(tech => (
          <Link to={`/tech/${tech.slug}`} key={tech.id}>
            <li key={tech.id}>
              <img src={tech.image} style={{ width: '50px' }} />
              {tech.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default CompanyPage;
