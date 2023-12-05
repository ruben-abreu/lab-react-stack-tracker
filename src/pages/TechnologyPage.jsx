/* eslint-disable react/prop-types */
import { Link, useParams, useSearchParams } from 'react-router-dom';
function TechnologyPage({ technologies }) {
  let { techSlug } = useParams();
  const [searchParams] = useSearchParams();

  const slug = searchParams.get('company');

  const tech = technologies.find(tech => tech.slug === techSlug);

  return (
    <div key={tech.id}>
      <p className='company-header'>{tech.name}</p>
      <div>
        <img src={tech.image} alt='tech-logo' style={{ width: '100px' }} />
        <p className='text-description'>{tech.description}</p>
      </div>
      <Link to={`/company/${slug}`} className='back-button'>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default TechnologyPage;
